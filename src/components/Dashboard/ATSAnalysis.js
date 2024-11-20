import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const ATSAnalysis = () => {
  const [resumes, setResumes] = useState([]);
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [selectedResume, setSelectedResume] = useState("");
  const [selectedJobDescription, setSelectedJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  // Fetch available resumes and job descriptions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resumeResponse = await fetch("http://127.0.0.1:8000/resume?user_id=1");
        const jobDescriptionResponse = await fetch("http://127.0.0.1:8000/job-description?user_id=1");
  
        if (!resumeResponse.ok) {
          throw new Error(`Resume API Error: ${resumeResponse.statusText}`);
        }
        if (!jobDescriptionResponse.ok) {
          throw new Error(`Job Description API Error: ${jobDescriptionResponse.statusText}`);
        }
  
        const resumesData = await resumeResponse.json();
        const jobDescriptionsData = await jobDescriptionResponse.json();
  
        console.log("Resumes Data:", resumesData);
        console.log("Job Descriptions Data:", jobDescriptionsData);
  
        setResumes(resumesData);
        setJobDescriptions(jobDescriptionsData);
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError(err.message);
      }
    };
  
    fetchData();
  }, []);
  
  const handleAnalyze = async () => {
    if (!selectedResume || !selectedJobDescription) {
      setError("Please select both a resume and a job description.");
      return;
    }

    setLoading(true);
    setResults(null);
    setError("");

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/analysis?resume_id=${selectedResume}&job_description_id=${selectedJobDescription}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setResults(data); // Display results if successful
      } else {
        setError(data.detail || "Failed to fetch analysis results.");
      }
    } catch (err) {
      console.error("Error analyzing:", err);
      setError("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, margin: "auto" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        ATS Analysis
      </Typography>

      {/* Select Resume */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Resume</InputLabel>
        <Select
          value={selectedResume}
          onChange={(e) => setSelectedResume(e.target.value)}
        >
          {Array.isArray(resumes) && resumes.length > 0 ? (
            resumes.map((resume) => (
              <MenuItem key={resume.id} value={resume.id}>
                {resume.name || `Resume ${resume.id}`}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No resumes available</MenuItem>
          )}
        </Select>
      </FormControl>

      {/* Select Job Description */}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Job Description</InputLabel>
        <Select
          value={selectedJobDescription}
          onChange={(e) => setSelectedJobDescription(e.target.value)}
        >
          {Array.isArray(jobDescriptions) && jobDescriptions.length > 0 ? (
            jobDescriptions.map((job) => (
              <MenuItem key={job.id} value={job.id}>
                {job.title || `Job Description ${job.id}`}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No job descriptions available</MenuItem>
          )}
        </Select>
      </FormControl>

      {/* Analyze Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Analyze"}
      </Button>

      {/* Display Error */}
      {error && (
        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {/* Display Results */}
      {results && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Analysis Score: {results.score}%</Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
            Matched Keywords:
          </Typography>
          <ul>
            {results.matched_keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default ATSAnalysis;

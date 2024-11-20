import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const JobDescriptionUpload = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!jobDescription.trim()) {
      alert("Please enter a job description.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/job-description/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: jobDescription }),
      });

      if (response.ok) {
        alert("Job description submitted successfully!");
      } else {
        alert("Failed to submit job description.");
      }
    } catch (error) {
      console.error("Error submitting job description:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Submit Job Description
      </Typography>
      <TextField
        multiline
        rows={6}
        fullWidth
        label="Job Description"
        variant="outlined"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
      </Button>
    </Box>
  );
};

export default JobDescriptionUpload;

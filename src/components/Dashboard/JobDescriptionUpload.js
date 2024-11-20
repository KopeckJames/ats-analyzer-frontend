import React, { useState } from "react";
import { Box, Button, TextField, Typography, CircularProgress } from "@mui/material";

const JobDescriptionUpload = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!jobDescription.trim() || !jobTitle.trim()) {
      setMessage("Please provide both a job title and description.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/job-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: jobDescription,
          title: jobTitle,
          user_id: 1, // Replace with the actual user ID (e.g., from authentication context)
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setMessage("Job description submitted successfully!");
        setJobDescription("");
        setJobTitle("");
      } else {
        setMessage(data.detail || "Failed to submit job description.");
      }
    } catch (error) {
      console.error("Error submitting job description:", error);
      setMessage("A network error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, margin: "auto" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Submit Job Description
      </Typography>
      <TextField
        label="Job Title"
        fullWidth
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Job Description"
        multiline
        rows={6}
        fullWidth
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={submitting}
      >
        {submitting ? <CircularProgress size={24} /> : "Submit"}
      </Button>
      {message && (
        <Typography
          variant="body2"
          color={message.includes("successfully") ? "green" : "red"}
          sx={{ mt: 2 }}
        >
          {typeof message === "string" ? message : JSON.stringify(message)}
        </Typography>
      )}
    </Box>
  );
};

export default JobDescriptionUpload;

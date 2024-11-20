import React, { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/resume/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Resume uploaded successfully!");
      } else {
        const errorData = await response.json();
        setMessage(errorData.detail || "Failed to upload resume.");
      }
    } catch (error) {
      console.error("Error uploading resume:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 400, margin: "auto" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Upload Your Resume
      </Typography>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "block", marginBottom: "1rem" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? <CircularProgress size={24} /> : "Upload"}
      </Button>
      {message && (
        <Typography
          variant="body2"
          color={message.includes("successfully") ? "green" : "red"}
          sx={{ mt: 2 }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default ResumeUpload;

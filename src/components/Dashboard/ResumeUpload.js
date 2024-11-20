import React, { useState } from "react";
import { Button, Box, Typography, CircularProgress } from "@mui/material";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Replace with your actual backend endpoint
      const response = await fetch("http://127.0.0.1:8000/resume/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Resume uploaded successfully!");
      } else {
        alert("Failed to upload resume.");
      }
    } catch (error) {
      console.error("Error uploading resume:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Upload Your Resume
      </Typography>
      <input type="file" onChange={handleFileChange} />
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleUpload} disabled={uploading}>
          {uploading ? <CircularProgress size={24} /> : "Upload"}
        </Button>
      </Box>
    </Box>
  );
};

export default ResumeUpload;

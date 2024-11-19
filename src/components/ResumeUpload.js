import React, { useState } from "react";
import { api } from "../../../src/services/api";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      await api.post("/resume/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Resume uploaded successfully!");
    } catch (err) {
      alert("Failed to upload resume.");
    }
  };

  return (
    <div>
      <h2>Upload Resume</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ResumeUpload;

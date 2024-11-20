import React, { useState } from "react";
import { Box, Typography, Button, CircularProgress, List, ListItem, ListItemText } from "@mui/material";

const ATSAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/ats/analyze", {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        alert("Failed to analyze resume.");
      }
    } catch (error) {
      console.error("Error analyzing resume:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        ATS Analysis Results
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAnalyze} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Analyze"}
      </Button>
      {results && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Analysis Score: {results.score}%</Typography>
          <List>
            {results.matched_keywords.map((keyword, index) => (
              <ListItem key={index}>
                <ListItemText primary={keyword} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default ATSAnalysis;

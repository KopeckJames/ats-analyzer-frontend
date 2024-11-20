import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText, Toolbar, Box, Typography } from "@mui/material";
import ResumeUpload from "./ResumeUpload"; // Import the ResumeUpload component
import JobDescriptionUpload from "./JobDescriptionUpload"; // Placeholder for additional features
import ATSAnalysis from "./ATSAnalysis";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Navigation */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/dashboard/resume-upload">
            <ListItemText primary="Upload Resume" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/job-description-upload">
            <ListItemText primary="Submit Job Description" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/ats-analysis">
            <ListItemText primary="ATS Analysis" />
          </ListItem>
        </List>
      </Drawer>

      {/* Content Area */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" sx={{ mb: 3 }}>
          Dashboard
        </Typography>
        <Routes>
          {/* Route for Upload Resume */}
          <Route path="/resume-upload" element={<ResumeUpload />} />
          {/* Route for Job Description Submission */}
          <Route path="/job-description-upload" element={<JobDescriptionUpload />} />
          {/* Route for ATS Analysis */}
          <Route path="/ats-analysis" element={<ATSAnalysis />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;

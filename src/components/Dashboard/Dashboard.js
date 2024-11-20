import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import ResumeUpload from "./ResumeUpload";
import JobDescriptionUpload from "./JobDescriptionUpload";
import ATSAnalysis from "./ATSAnalysis";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DescriptionIcon from "@mui/icons-material/Description";
import AssessmentIcon from "@mui/icons-material/Assessment";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
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
            <ListItemIcon>
              <UploadFileIcon />
            </ListItemIcon>
            <ListItemText primary="Upload Resume" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/job-description-upload">
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Submit Job Description" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/ats-analysis">
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="ATS Analysis" />
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/dashboard/resume-upload" element={<ResumeUpload />} />
          <Route path="/dashboard/job-description-upload" element={<JobDescriptionUpload />} />
          <Route path="/dashboard/ats-analysis" element={<ATSAnalysis />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;

import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import UploadFileIcon from "@mui/icons-material/UploadFile";
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
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <UploadFileIcon />
            </ListItemIcon>
            <ListItemText primary="Upload Resume" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Analyze Resume" />
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">Dashboard Content</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;

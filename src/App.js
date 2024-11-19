import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";

function Home() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, textAlign: "center" }}>
        Welcome to ATS Analyzer
      </Typography>
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/login" sx={{ mr: 2 }}>
          Login
        </Button>
        <Button variant="outlined" color="secondary" component={Link} to="/signup">
          Signup
        </Button>
      </Box>
    </Container>
  );
}

function Login() {
  return <Typography variant="h5">Login Page</Typography>;
}

function Signup() {
  return <Typography variant="h5">Signup Page</Typography>;
}

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ATS Analyzer
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

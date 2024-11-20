import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue (default Material-UI primary color)
      contrastText: "#ffffff", // Text color on primary buttons
    },
    secondary: {
      main: "#ff4081", // Pink for accents
      contrastText: "#ffffff", // Text color on secondary buttons
    },
    background: {
      default: "#f5f5f5", // Light gray background
      paper: "#ffffff", // White for cards and papers
    },
    text: {
      primary: "#333333", // Dark text for high contrast
      secondary: "#666666", // Muted text for secondary information
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif", // Consistent font
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none", // Prevent all caps on buttons
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2", // Primary color for the top bar
          color: "#ffffff", // Text color for AppBar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded corners for buttons
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Rounded corners for cards
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        },
      },
    },
  },
});

export default theme;

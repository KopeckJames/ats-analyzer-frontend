// auth.js

// Check if the user is authenticated by verifying the presence of a token in localStorage
export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token; // Returns true if the token exists, false otherwise
  };
  
  // Log out the user by removing the token from localStorage and optionally redirecting
  export const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to the login page
  };
  
  // Retrieve the token from localStorage
  export const getToken = () => {
    return localStorage.getItem("token");
  };
  
  // Save the token to localStorage
  export const saveToken = (token) => {
    localStorage.setItem("token", token);
  };
  
  // Generate an Authorization header for authenticated requests
  export const setAuthHeader = () => {
    const token = getToken();
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  };
  
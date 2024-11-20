// auth.js
export const isAuthenticated = () => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");
  
    // Return true if the token exists, otherwise false
    return !!token;
  };
  
  export const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
  
    // Optionally redirect the user to the login page
    window.location.href = "/login";
  };
  
  export const getToken = () => {
    // Retrieve the token from localStorage
    return localStorage.getItem("token");
  };
  
  export const saveToken = (token) => {
    // Save the token to localStorage
    localStorage.setItem("token", token);
  };
  
  export const setAuthHeader = () => {
    // Get the token
    const token = getToken();
  
    // Return the Authorization header if the token exists
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  };

  
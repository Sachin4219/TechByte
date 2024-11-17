import { createContext, useEffect, useState } from "react";
import { base_url } from "./assets/data";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuth(false);
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${base_url}check_login/`, config);

      setIsAuth(response.data.success);
    } catch (error) {
      setIsAuth(false);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle logout
  const logout = () => {
    localStorage.clear();
    setIsAuth(false);
    window.location.reload(); // Refresh the page to reset the state
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

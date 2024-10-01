import React from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorRoute.css";

const ErrorRoute = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="error-route">
      <h1 className="error-title">404 - Page not found</h1>
      <p className="error-message">
        Sorry, but the page you requested does not exist.
      </p>
      <button onClick={handleGoHome} className="error-button">
        Return to home page
      </button>
    </div>
  );
};

export default ErrorRoute;

import React from "react";
import { useNavigate } from "react-router-dom";

const BackToCountriesBtn = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/countries")}>Back to countries</button>
  );
};

export default BackToCountriesBtn;

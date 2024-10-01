import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCountry } from "../../../store/features/countries/slice";

const DeleteCountryBtn = ({ countryName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(removeCountry(countryName));
    navigate("/countries");
  };

  return <button onClick={handleDelete}>Delete country</button>;
};

export default DeleteCountryBtn;

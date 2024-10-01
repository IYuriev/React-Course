import React from "react";
import { useDispatch } from "react-redux";
import { removeCountry } from "../../../store/features/countries/slice";
import "../CountriesList.css";

const DeleteCountryInListBtn = ({ countryName }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeCountry(countryName));
  };

  return (
    <button className="countries-list__button" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteCountryInListBtn;

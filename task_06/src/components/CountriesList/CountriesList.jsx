import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../store/features/countries/thunks";
import { useNavigate } from "react-router-dom";
import DeleteCountryInListBtn from "./DeleteCountryInListBtn/DeleteCountryInListBtn";
import "./CountriesList.css";

const CountriesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countriesList, isLoading, isError } = useSelector(
    (state) => state.countries
  );

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <p>Error: {isError}</p>;

  const handleCountryClick = (countryName) => {
    const normalizedCountryName = countryName.toLowerCase();
    navigate(`/countries/${normalizedCountryName}`);
  };

  return (
    <div className="countries-list">
      <h3>Countries List</h3>
      <ul>
        {countriesList.map((country) => (
          <li key={country.name.official} className="countries-list__item">
            <span>{country.flag} </span>
            <span
              onClick={() => handleCountryClick(country.name.official)}
              className="countries-click"
            >
              {country.name.official}
            </span>
            <DeleteCountryInListBtn countryName={country.name.official} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;

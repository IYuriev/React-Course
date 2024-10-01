import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../store/features/countries/thunks";
import CountryDetails from "../CountryDetails/CountryDetails";
import DeleteCountryBtn from "./DeleteCountryBtn/DeleteCountryBtn";
import BackToCountriesBtn from "./BackToCountriesBtn/BackToCountriesBtn";
import "./MoreInfo.css";

const MoreInfo = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const sortQueryParam = searchParams.get("sort");
  const { isLoading, isError, countriesList } = useSelector(
    (state) => state.countries
  );

  useEffect(() => {
    if (!countriesList.length) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countriesList.length]);

  const selectedCountry = countriesList.find(
    (item) => item.name.official.toLowerCase() === country.toLowerCase()
  );

  if (isLoading || !selectedCountry) return <h3>Loading...</h3>;
  if (isError) return <p>Error: {isError}</p>;

  const translation =
    selectedCountry?.translations[sortQueryParam]?.official || "";

  return (
    <>
      <div className="more-info">
        <h3>{translation ? translation : selectedCountry.name.official}</h3>
        <CountryDetails country={selectedCountry} />
        <DeleteCountryBtn countryName={selectedCountry.name.official} />
      </div>
      <br />
      <BackToCountriesBtn />
    </>
  );
};

export default MoreInfo;

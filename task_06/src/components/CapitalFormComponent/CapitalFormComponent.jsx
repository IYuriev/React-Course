import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../store/features/countries/thunks";
import {
  setCapital,
  setTranslation,
} from "../../store/features/capitals/slice";
import SelectCapital from "../SelectCapital/SelectCapital";
import SelectTranslation from "../SelectTranslation/SelectTranslation";
import MoreInfoBtn from "../MoreInfoBtn/MoreInfoBtn";

import "./CapitalFormComponent.css";

const CountryForm = () => {
  const dispatch = useDispatch();
  const { countriesList } = useSelector((state) => state.countries);
  const { capital, translation } = useSelector((state) => state.capitals);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleCapitalChange = (event) => {
    dispatch(setCapital(event.target.value));
  };

  const handleTranslationChange = (event) => {
    dispatch(setTranslation(event.target.value));
  };

  const selectedCountry = countriesList.find((country) =>
    country.capital.includes(capital)
  );

  return (
    <div className="capital-form-component">
      <h3>Capital Form Component</h3>
      <form>
        <SelectCapital
          handleCapitalChange={handleCapitalChange}
          countries={countriesList}
        />

        <SelectTranslation
          handleTranslationChange={handleTranslationChange}
          selectedCountry={selectedCountry}
        />

        {selectedCountry && translation && (
          <MoreInfoBtn
            selectedCountry={selectedCountry}
            selectedTranslation={translation}
          />
        )}
      </form>
    </div>
  );
};

export default CountryForm;

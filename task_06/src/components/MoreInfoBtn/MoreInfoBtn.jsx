import React from "react";
import { NavLink } from "react-router-dom";

const MoreInfoBtn = ({ selectedCountry, selectedTranslation }) => {
  return (
    <div>
      <NavLink
        to={`/countries/${selectedCountry.name.official}?sort=${selectedTranslation}`}
      >
        <button>Read more about {selectedCountry.name.official}</button>
      </NavLink>
    </div>
  );
};

export default MoreInfoBtn;

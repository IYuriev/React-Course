import React from "react";
import { useSelector } from "react-redux";
import "./SelectTranslation.css";

const SelectTranslation = ({ handleTranslationChange, selectedCountry }) => {
  const { translation } = useSelector((state) => state.capitals);

  return (
    <div>
      <label>
        <p className="select-translation">Select Translation</p>
        <select
          className="select-form"
          onChange={handleTranslationChange}
          value={translation}
        >
          {selectedCountry &&
            Object.keys(selectedCountry.translations).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
};

export default SelectTranslation;

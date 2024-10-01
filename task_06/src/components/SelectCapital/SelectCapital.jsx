import React from "react";
import { useSelector } from "react-redux";
import "./SelectCapital.css";

const SelectCapital = ({ handleCapitalChange, countries }) => {
  const { capital } = useSelector((state) => state.capitals);

  return (
    <div>
      <label>
        <p className="select-capital">Select Capital</p>
        <select
          onChange={handleCapitalChange}
          value={capital}
          className="select-form"
        >
          {countries.map((item) => (
            <option key={item.id} value={item.capital[0]}>
              {item.flag} {item.capital[0]}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectCapital;

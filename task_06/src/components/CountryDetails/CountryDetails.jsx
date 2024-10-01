import React from "react";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const CountryDetails = ({ country }) => {
  if (typeof country === "object" && country !== null) {
    return (
      <ul>
        {Object.entries(country).map(([key, value], index) => {
          if (key === "id") return null;

          return (
            <li key={index}>
              <strong>{capitalizeFirstLetter(key)}:</strong>{" "}
              {Array.isArray(value) ? (
                <ul>
                  {value.map((item, idx) => (
                    <li key={idx}>
                      <CountryDetails country={item} />
                    </li>
                  ))}
                </ul>
              ) : typeof value === "object" ? (
                <CountryDetails country={value} />
              ) : (
                <span>{String(value)}</span>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return <span>{String(country)}</span>;
};

export default CountryDetails;

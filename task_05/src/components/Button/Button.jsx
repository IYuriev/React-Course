import React from "react";

const Button = ({ title, handleClick }) => {
  return (
    <button className="battle__btn" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;

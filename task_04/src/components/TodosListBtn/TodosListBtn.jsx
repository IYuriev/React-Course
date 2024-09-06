import React from "react";

const TodosListBtn = ({ btns = [] }) => {
  return (
    <>
      {btns.map((btn, index) => (
        <button key={index} className={btn.className} onClick={btn.action}>
          {btn.label}
        </button>
      ))}
    </>
  );
};

export default TodosListBtn;

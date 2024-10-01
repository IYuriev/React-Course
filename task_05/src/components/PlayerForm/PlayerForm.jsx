import React, { useRef, useContext } from "react";

import service from "../../services/service";

import { SET_PLAYER_DATA_ACTION } from "../../actions/field";
import FieldContext from "../../contexts/FieldContext";
import Button from "../Button/Button";

const PlayerForm = ({ player, index }) => {
  const { dispatch } = useContext(FieldContext);
  const inputRef = useRef();
  const labelRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    labelRef.current.classList.contains("form__label--error") &&
      labelRef.current.classList.remove("form__label--error");

    const username = inputRef.current.value;

    try {
      const response = await service.get(username);
      dispatch({
        type: SET_PLAYER_DATA_ACTION,
        payload: { ...player, data: response },
      });
    } catch (error) {
      console.log(error);
      labelRef.current.classList.add("form__label--error");
    }
  };

  return (
    <form className="form__label" onSubmit={handleSubmit}>
      <label ref={labelRef} className="form__label">
        <p className="label__title">
          Choose <b>Player {index}</b> username:
        </p>
        <input
          ref={inputRef}
          required
          type="text"
          className="label__input"
          placeholder={`Player ${index}`}
          defaultValue={player.username}
        />
        <p className="label__error">Username not exist</p>
      </label>
      <Button title={"Submit"} />
    </form>
  );
};

export default PlayerForm;

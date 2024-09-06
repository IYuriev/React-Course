import React from "react";
import { useState, useRef } from "react";

import service from "../../services/todos";
import TodosFormBtn from "../TodosFormBtn/TodosFormBtn";

const TodosForm = ({ liftingNewTodo }) => {
  const DEFAULT_NEW_TODO = {
    title: `Salmon`,
    available: true,
  };
  const [newTodo, setNewTodo] = useState(DEFAULT_NEW_TODO);

  const formRef = useRef();

  const handleNewTodoTitle = (event) => {
    setNewTodo((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const handleNewTodoAvailable = (event) => {
    setNewTodo((prevState) => ({
      ...prevState,
      available: event.target.checked,
    }));
  };

  const handleNewTodoSubmit = async (event) => {
    event.preventDefault();

    const response = await service.post(newTodo);
    liftingNewTodo(response);

    setNewTodo(DEFAULT_NEW_TODO);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="todos__form" onSubmit={handleNewTodoSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          defaultValue={newTodo.title}
          onChange={handleNewTodoTitle}
        />
      </label>
      <label>
        Available:{" "}
        <input
          type="checkbox"
          defaultChecked={newTodo.available}
          onChange={handleNewTodoAvailable}
        />
      </label>
      <TodosFormBtn />
    </form>
  );
};

export default TodosForm;

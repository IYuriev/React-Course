import React, { useState } from "react";
import "./style.css";

import TodosForm from "../TodosForm/TodosForm";
import TodosList from "../TodosList/TodosList";

const Todos = ({ liftingNewTodoToApp }) => {
  const [newTodo, setNewTodo] = useState({});

  const liftedNewTodo = (item) => {
    console.log("in Todos", item);
    liftingNewTodoToApp(item);

    setNewTodo(item);
  };

  return (
    <>
      <TodosForm liftingNewTodo={liftedNewTodo} />
      <TodosList newTodo={newTodo} />
    </>
  );
};

export default Todos;

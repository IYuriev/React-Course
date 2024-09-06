import React from "react";
import Todos from "./components/Todos/Todos";

const App = () => {
  const ligtedNewTodo = (item) => {
    console.log("in App", item);
  };
  return (
    <>
      <Todos liftingNewTodoToApp={ligtedNewTodo} />
    </>
  );
};

export default App;

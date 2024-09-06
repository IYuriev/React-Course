import React, { useEffect, useState } from "react";

import service from "../../services/todos";
import TodosListBtn from "../TodosListBtn/TodosListBtn";

const TodosList = ({ newTodo }) => {
  const [todos, setTodos] = useState([]);
  const [sortedTodos, setSortedTodos] = useState([]);

  const getTodos = async () => {
    const response = await service.get();
    setTodos(response);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if (Object.keys(newTodo).length) getTodos();
  }, [newTodo]);

  useEffect(() => {
    setSortedTodos(todos.sort((a, b) => b.available - a.available));
  }, [todos]);

  const handleItemDelete = async (id) => {
    await service.delete(id);
    getTodos();
  };

  const getListItemClassName = (item) => {
    const classes = [];

    if (item.available) classes.push("item--available");

    return classes.join(" ");
  };

  const handleItemUpdate = async (item) => {
    const response = await service.put(item.id, {
      ...item,
      available: !item.available,
    });
    getTodos();
  };

  return sortedTodos.length ? (
    <ul>
      {sortedTodos.map((item) => (
        <li className={getListItemClassName(item)} key={item.id}>
          {item.title}
          <TodosListBtn
            item={item}
            btns={[
              {
                action: () => handleItemDelete(item.id),
                label: "Delete",
                className: "delete-button",
              },
              {
                action: () => handleItemUpdate(item),
                label: "Update",
                className: "update-button",
              },
            ]}
          />
        </li>
      ))}
    </ul>
  ) : null;
};

export default TodosList;

import React, { useState, useEffect } from "react";

import "../Tasks/style.css";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(
            `https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks`
          ),
          response = await request.json();

        setTasks(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const updateTaskStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const renderTasks = (status) => {
    return tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <li key={task.id}>
          {task.title}
          {status === 0 && (
            <button onClick={() => updateTaskStatus(task.id, 1)}>
              In Progress
            </button>
          )}
          {status === 1 && (
            <>
              <button onClick={() => updateTaskStatus(task.id, 0)}>
                To Do
              </button>
              <button onClick={() => updateTaskStatus(task.id, 2)}>Done</button>
            </>
          )}
          {status === 2 && (
            <button onClick={() => deleteTask(task.id)}>To Archive</button>
          )}
        </li>
      ));
  };

  return (
    <div className="task-board">
      <div className="column">
        <h3>To Do ({tasks.filter((task) => task.status === 0).length})</h3>
        <ul>{renderTasks(0)}</ul>
      </div>
      <div className="column">
        <h3>
          In Progress ({tasks.filter((task) => task.status === 1).length})
        </h3>
        <ul>{renderTasks(1)}</ul>
      </div>
      <div className="column">
        <h3>Done ({tasks.filter((task) => task.status === 2).length})</h3>
        <ul>{renderTasks(2)}</ul>
      </div>
    </div>
  );
};

export default Task;

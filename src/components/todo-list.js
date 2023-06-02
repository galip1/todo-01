import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./todo-list.scss";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h1>ToDo List</h1>
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <Link to={`/todos/${todo.id}`} className="todo-link">
            {todo.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

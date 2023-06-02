import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./todo-detail.scss";

function TodoDetail() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!todo) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="todo-detail">
      <h1>{todo.title}</h1>
      <p>Status: {todo.completed ? "Completed" : "Incomplete"}</p>
      <Link to="/" className="home-button">
        Go Back
      </Link>
    </div>
  );
}

export default TodoDetail;

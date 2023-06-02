import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to the ToDo App!</h1>
      <Link to="/todos" className="link">
        View To-Do List
      </Link>
    </div>
  );
}

export default Home;

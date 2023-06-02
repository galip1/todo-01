import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/todo-01/home";
import TodoList from "./components/todo-01/todo-list";
import TodoDetail from "./components/todo-01/todo-detail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

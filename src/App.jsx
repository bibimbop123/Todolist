import React from "react";
import Todo from "./components/Todo";

import "./App.css";
//make a todo list app
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <Todo />
      </header>
    </div>
  );
}

export default App;

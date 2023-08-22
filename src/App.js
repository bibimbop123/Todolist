import logo from "./logo.svg";
import "./App.css";
//make a todo list app
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <input type="text" placeholder="Add a new todo"></input>
        <ul>
          <li>Get up</li>
          <li>Brush teeth</li>
          <li>Take a shower</li>
          <li>Get dressed</li>
          <li>Go to work</li>
        </ul>
      </header>
    </div>
  );
}

export default App;

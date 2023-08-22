import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

export default function Todo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setList([...list, input])}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

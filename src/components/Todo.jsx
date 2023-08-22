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
          <div>
            <li key={index}>{item}</li>
            <button
              onClick={() => {
                const newList = [...list];
                newList.splice(index, 1);
                setList(newList);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

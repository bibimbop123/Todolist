import React from "react";
import { useState } from "react";

export default function Todo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState("");
  const [completed, setCompleted] = useState([]);

  const handleAdd = () => {
    setList([...list, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleEdit = (item, index) => {
    setEdit(!edit);
    setEditInput(item);
  };

  const handleUpdate = (index) => {
    const newList = [...list];
    newList[index] = editInput;
    setList(newList);
    setEdit(false);
  };

  const handleComplete = (index) => {
    const newCompleted = [...completed];
    if (newCompleted.includes(index)) {
      const indexToRemove = newCompleted.indexOf(index);
      newCompleted.splice(indexToRemove, 1);
    } else {
      newCompleted.push(index);
    }
    setCompleted(newCompleted);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((item, index) => (
          <div key={index}>
            <li className="list-item">
              <span
                style={{
                  textDecoration: completed.includes(index) ? "none" : "none",
                }}
              >
                {item}
              </span>
              {completed.includes(index) && " ✅"}
            </li>
            {edit && (
              <>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button onClick={() => handleUpdate(index)}>Update</button>
              </>
            )}
            <button onClick={() => handleEdit(item, index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleComplete(index)}>
              {completed.includes(index) ? "Uncomplete" : "Complete"}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

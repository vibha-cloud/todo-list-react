import "./App.css";

import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";

// JSX: JavaScript XML

const App = () => {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit_index, setedit_index] = useState(-1);

  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleAdd = () => {
    const newTodo = [...todo, val];
    setTodo(newTodo);
    setVal("");
  };
  const handleDelete = (index) => {
    const newTodo = todo.filter((val, ind) => {
      return ind != index;
    });
    setTodo(newTodo);
  };
  const handleEdit = (index) => {
    setedit_index(index);
  };
  const handleUpdate = (e) => {
    const newTodo = [...todo];
    newTodo[edit_index] = e.target.value;
    setTodo(newTodo);
  };

  return (
    <div className="main-container">
      <div className="upper-box">
        <h1>Your to-do list</h1>
        <div className="input-box">
          <input
            type="text"
            value={val}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAdd();
              }
            }}
          />
          <button className="btn" onClick={handleAdd}>Add Item</button>
        </div>
      </div>
      <div className="lower-box">
        {todo.map((value, index) => {
          return (
            <>
              <div>
                <input
                  type="text"
                  value={value}
                  key={index}
                  onChange={handleUpdate}
                  disabled={index != edit_index ? true : false}
                  style={{
                    color: index != edit_index ? "white" : "black",
                  }}
                />
                {edit_index == index ? (
                  <button onClick={() => setedit_index(-1)}>
                    <AiFillCheckSquare />
                  </button>
                ) : (
                  <button onClick={() => handleEdit(index)}>
                    <AiFillEdit />
                  </button>
                )}
                <button onClick={() => handleDelete(index)}>
                  <AiFillDelete />
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;

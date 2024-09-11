import React from "react";
import "./TodoItem.css";

function TodoItem({tarea, finish}) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${finish && "Icon-check--active"}`}
      >
        V
      </span>
      <p className={`TodoItem-p ${finish && "TodoItem-p--complete"}`}>
        {tarea}
      </p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}
export { TodoItem };
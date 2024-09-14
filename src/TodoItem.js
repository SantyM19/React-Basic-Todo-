import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.finish && "Icon-check--active"}`} 
        onClick={props.onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.finish && "TodoItem-p--complete"}`}>
        {props.tarea}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>X</span>
    </li>
  );
}
export { TodoItem };
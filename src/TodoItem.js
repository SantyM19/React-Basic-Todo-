import React from "react";

function TodoItem({tarea, finish}) {
  return (
    <li>
      <span>{finish ? "v": "Ño"}</span>
      <p>{tarea}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
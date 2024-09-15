import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  return <button 
  onClick={()=>console.log("Click ñeri")}
  className="CreateTodoButton">+</button>;
}

export { CreateTodoButton };
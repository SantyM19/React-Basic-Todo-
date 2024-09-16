import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1');

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState("");

  console.log("Los usuarios buscan todos de " + searchValue);

  const todosCompleted = todos.filter((todo) => !!todo.completed).length;
  const allTodos = todos.length;

  const todosSearched = todos.filter((todo) => {
    const textTodos = todo.text.toLowerCase();
    const textSearch = searchValue.toLowerCase();
    return textTodos.includes(textSearch);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      todosCompleted={todosCompleted}
      allTodos={allTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todosSearched={todosSearched}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}
  

export default App;
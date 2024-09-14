import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from 'react'
import "./App.css";

const todosDefault = [
  {text : "trabajar", completed: true},
  {text : "estudiar", completed: true},
  {text : "dormir", completed: false},
  {text : "comer", completed: true},
]

function App() {
  const [todos,setTodos] = React.useState(todosDefault)
  const [searchValue,setSearchValue] = React.useState('');
  console.log('Los usuarios buscan todos de ' + searchValue);

  const todosCompleted = todos.filter(todo => !!todo.completed).length;
  const allTodos = todos.length;
  const todosSearched = todos.filter((todo) => {
    const textTodos = todo.text.toLowerCase();
    const textSearch = searchValue.toLowerCase();
    return textTodos.includes(textSearch);
  })

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={todosCompleted} total={allTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>
        {todosSearched.map(todo => (
          <TodoItem key={todo.text} 
          tarea={todo.text} 
          finish={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
          ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}


export default App;
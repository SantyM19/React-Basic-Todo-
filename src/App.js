import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";

const todos = [
  {text : "trabajar", completed: true},
  {text : "estudiar", completed: true},
  {text : "dormir", completed: false},
  {text : "comer", completed: true},
]

function App() {
  return (
    <>
      <TodoCounter completed={5} total={6} />
      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} tarea={todo.text} finish={todo.completed}/>
          ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}


export default App;
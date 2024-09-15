import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
function AppUI({
  todosCompleted,
  allTodos,
  searchValue,
  setSearchValue,
  todosSearched,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter completed={todosCompleted} total={allTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {todosSearched.map((todo) => (
          <TodoItem
            key={todo.text}
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
export { AppUI };

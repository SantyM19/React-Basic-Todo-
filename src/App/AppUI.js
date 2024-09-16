import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";

function AppUI({
  loading,
  error,
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
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && todosSearched.length === 0 && <EmptyTodos />}

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

import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

type Filter = "all" | "completed" | "incompleted";

type TodoListProps = {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleComplete: (id: number, completed: boolean) => void;
  filter: Filter;
}

// TodoInputで入力したタスクの配列ををmapでTodoItemに渡す
function TodoList({ todos, handleDelete, handleComplete, filter }: TodoListProps) {
  return (
    <div className="bg-white py-5 px-4 rounded-md">
      <ul className="flex flex-col gap-3">
        {
          todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} handleDelete={handleDelete} handleComplete={handleComplete} filter={filter} />
          })
        }
      </ul>
    </div>
  );
}
export default TodoList;
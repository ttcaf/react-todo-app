import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  priority: string;
}

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onComplete: (id: number, completed: boolean) => void;
  filter: string;
  onPriority: (id: number, priority: string) => void;
  onEdit: (id: number, text: string) => void;
}

// TodoInputで入力したタスクの配列ををmapでTodoItemに渡す
function TodoList({ todos, onDelete, onComplete, filter, onPriority, onEdit }: TodoListProps) {
  return (
    <div className="bg-white py-5 px-4 rounded-md">
      <ul className="flex flex-col gap-3">
        {
          todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} onDelete={onDelete} onComplete={onComplete} filter={filter} onPriority={onPriority} onEdit={onEdit} />
          })
        }
      </ul>
    </div>
  );
}
export default TodoList;
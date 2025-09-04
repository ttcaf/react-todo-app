import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

type TodoListProps = {
  todos: string[];
}

// TodoInputで入力したタスクの配列ををmapでTodoItemに渡す
function TodoList({ todos }: TodoListProps) {
  return (
    <div className="bg-white py-5 px-4 rounded-md">
      <ul className="flex flex-col gap-3">
        {
          todos.map((todo, index) => {
            return <TodoItem todo={todo} key={index} />
          })
        }
      </ul>
    </div>
  );
}
export default TodoList;
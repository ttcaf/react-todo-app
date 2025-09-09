import React from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

type Filter = "all" | "completed" | "incompleted";

type TodoItemProps = {
  todo: Todo;
  handleDelete: (id: number) => void;
  handleComplete: (id: number, completed: boolean) => void;
  filter: Filter;
}

// TodoListで渡されたタスクを表示
function TodoItem({ todo, handleDelete, handleComplete, filter }: TodoItemProps) {

  if(filter === "completed" && !todo.completed) {
    return null;
  }

  if(filter === "incompleted" && todo.completed) {
    return null;
  }

  return (
    <li className="w-full flex pb-3 border-b border-gray-300">
     <span className="flex-1 pt-1">
      {todo.text}
     </span>
     <button type="button" className="bg-green-500 text-white px-2 py-1 mr-2 rounded-md cursor-pointer" onClick={() => handleComplete(todo.id, todo.completed)}>
       {todo.completed ? '完了' : '未完了'}
     </button>
     <button type="button" className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer" onClick={() => handleDelete(todo.id)}>
       削除
     </button>
   </li>
  );
}
export default TodoItem;
import React from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  priority: string;
}

type TodoItemProps = {
  todo: Todo;
  handleDelete: (id: number) => void;
  handleComplete: (id: number, completed: boolean) => void;
  filter: string;
  handlePriority: (id: number, priority: string) => void;
}

// TodoListで渡されたタスクを表示
function TodoItem({ todo, handleDelete, handleComplete, handlePriority, filter }: TodoItemProps) {

  if(filter === "completed" && !todo.completed) {
    return null;
  }

  if(filter === "incompleted" && todo.completed) {
    return null;
  }

  function setPriorityText(priority: string) {
    if(priority === 'high') {
      return '高';
    } else if(priority === 'medium') {
      return '中';
    } else {
      return '低';
    }
  }

  return (
    <li className="w-full flex pb-3 border-b border-gray-300">
     <span className="flex-1 pt-1">
      {todo.text}
     </span>
     <button type="button" className={`${todo.priority === 'high' ? 'bg-red-500' : todo.priority === 'medium' ? 'bg-blue-500' : 'bg-green-500'} text-white px-2 py-1 mr-2 rounded-md cursor-pointer`} onClick={() => handlePriority(todo.id, todo.priority)}>
       {setPriorityText(todo.priority)}
     </button>
     <button type="button" className={`${todo.completed ? 'bg-green-500' : 'bg-red-500'} text-white px-2 py-1 mr-2 rounded-md cursor-pointer`} onClick={() => handleComplete(todo.id, todo.completed)}>
       {todo.completed ? '完了' : '未完了'}
     </button>
     <button type="button" className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer" onClick={() => handleDelete(todo.id)}>
       削除
     </button>
   </li>
  );
}
export default TodoItem;
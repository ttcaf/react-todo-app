import React from 'react';

type TodoItemProps = {
  todo: string;
  index: number;
  handleDelete: (index: number) => void;
}

// TodoListで渡されたタスクを表示
function TodoItem({ todo, index, handleDelete }: TodoItemProps) {

  return (
    <li className="w-full flex pb-3 border-b border-gray-300">
     <span className="flex-1 pt-1">
      {todo}
     </span>
     <button type="button" className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer" onClick={() => handleDelete(index)}>
       削除
     </button>
   </li>
  );
}
export default TodoItem;
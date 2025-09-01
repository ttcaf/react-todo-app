import React from 'react';

function TodoItem() {
  return (
    <li className="w-full flex pb-3 border-b border-gray-300">
     <span className="flex-1 pt-1">
       ここにタスクが入ります。
     </span>
     <button type="button" className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer">
       削除
     </button>
   </li>
  )
}
export default TodoItem;
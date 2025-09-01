import React from 'react';
function TodoInput() {
  return (
    <div className="flex gap-2">
      <input type="text" className="flex-1 p-2 rounded-md border border-gray-400 bg-white" />
      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">追加</button>
    </div>
  )
}

export default TodoInput;
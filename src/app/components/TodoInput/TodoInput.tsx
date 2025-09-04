import React from 'react';

type TodoInputProps = {
  onAddTask: (e: React.FormEvent<HTMLFormElement>) => void; // 戻り値なしの関数
}

function TodoInput({ onAddTask }: TodoInputProps) {
  return (
    <form className="flex gap-2" onSubmit={onAddTask}>
      <input type="text" className="flex-1 p-2 rounded-md border border-gray-400 bg-white" name="todoInput"  />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">追加</button>
    </form>
  )
}

export default TodoInput;
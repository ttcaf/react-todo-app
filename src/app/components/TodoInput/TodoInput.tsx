import React from 'react';

type TodoInputProps = {
  value: string; // 文字列
  onTodoAdd: () => void; // 戻り値なしの関数
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 戻り値なしの関数、引数eはinput要素の変更イベント
}

function TodoInput({ value, onTodoAdd, onChange }: TodoInputProps) {
  return (
    <form className="flex gap-2" >
      <input type="text" className="flex-1 p-2 rounded-md border border-gray-400 bg-white" value={value} onChange={onChange} />
      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={onTodoAdd}>追加</button>
    </form>
  )
}

export default TodoInput;
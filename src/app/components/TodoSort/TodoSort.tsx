import React from 'react';

type TodoSortProps = {
  onSort: (e: React.FormEvent<HTMLFormElement>) => void;
}

function TodoSort({ onSort }: TodoSortProps) {
  return (
    <div className="bg-white py-5 px-4 rounded-md">
      <div className="flex justify-between"> 
        <form onSubmit={onSort}>
          <select name="completed" id="completed" className="px-2 py-1 rounded-md border border-gray-400 bg-gray-100">
            <option value="all">全て</option>
            <option value="completed">完了</option>
            <option value="incompleted">未完了</option>
          </select>
          <select name="priority" id="priority" className="px-2 py-1 rounded-md border border-gray-400 bg-gray-100">
            <option value="all">全て</option>
            <option value="high">高</option>
            <option value="medium">中</option>
            <option value="low">低</option>
          </select>
          <button type="submit" className="px-2 py-1 ml-4 rounded-md border bg-blue-500 text-white">並び替え</button>
        </form>
      </div>
    </div>
  );
}

export default TodoSort;
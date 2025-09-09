import React from 'react';

type TodoSortProps = {
  onSort: (e: React.FormEvent<HTMLFormElement>) => void;
}

function TodoSort({ onSort }: TodoSortProps) {
  return (
    <div className="bg-white py-5 px-4 rounded-md">
      <div className="flex justify-between"> 
        <form onSubmit={onSort} className="flex items-center">
          <div className="flex items-center">
            <span>ステータス：</span>
            <select name="completed" id="completed" className="px-2 py-1 rounded-md border border-gray-400 bg-gray-100">
              <option value="all">全て</option>
              <option value="completed">完了</option>
              <option value="incompleted">未完了</option>
            </select>
          </div>
          <div className="flex items-center ml-5">
            <span>並び順：</span>
            <select name="order" id="order" className="px-2 py-1 rounded-md border border-gray-400 bg-gray-100">
              <option value="date">作成日時</option>
              <option value="priority">優先度高い順</option>
            </select>
          </div>
          <button type="submit" className="px-2 py-1 ml-5 rounded-md border bg-blue-500 text-white">ソート</button>
        </form>
      </div>
    </div>
  );
}

export default TodoSort;
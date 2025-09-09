import React, { useState } from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  priority: string;
}

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onComplete: (id: number, completed: boolean) => void;
  filter: string;
  onPriority: (id: number, priority: string) => void;
  onEdit: (id: number, text: string) => void;
}

// TodoListで渡されたタスクを表示
function TodoItem({ todo, onDelete, onComplete, onPriority, onEdit, filter }: TodoItemProps) {

  const [edit, setEdit] = useState<boolean>(false);

  // ステータスでヒットしないものは表示させないのでリターン
  if(filter === "completed" && !todo.completed) {
    return;
  }

  if(filter === "incompleted" && todo.completed) {
    return;
  }

  // 保存している値は英語なので日本語に変換が必要
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
    <li className="w-full flex pb-3 border-b border-gray-300 md:flex-row flex-col">
      {
        edit ? (
          <input className="flex-1 pt-1 px-1 border border-black rounded-md w-full" value={todo.text} onChange={(e) => onEdit(todo.id, e.target.value)} />
        ) : (
          <span className="flex-1 pt-1">
            {todo.text}
          </span>
        )
      }
     <div className="flex mt-3 md:mt-0 md:ml-2">
      <button type="button" className={`${edit ? 'bg-black text-white' : 'text-black'} border border-black px-2 py-1 mr-2 rounded-md cursor-pointer`} onClick={() => setEdit(!edit)}>
        {edit ? '保存' : '編集'}
      </button>
      <button type="button" className={`${todo.priority === 'high' ? 'bg-red-500' : todo.priority === 'medium' ? 'bg-blue-500' : 'bg-green-500'} text-white px-2 py-1 mr-2 rounded-md cursor-pointer`} onClick={() => onPriority(todo.id, todo.priority)}>
        {setPriorityText(todo.priority)}
      </button>
      <button type="button" className={`${todo.completed ? 'bg-green-500' : 'bg-red-500'} text-white px-2 py-1 mr-2 rounded-md cursor-pointer`} onClick={() => onComplete(todo.id, todo.completed)}>
        {todo.completed ? '完了' : '未完了'}
      </button>
      <button type="button" className="border border-red-500 text-red-500 px-2 py-1 rounded-md cursor-pointer" onClick={() => onDelete(todo.id)}>
        削除
      </button>
     </div>
   </li>
  );
}
export default TodoItem;
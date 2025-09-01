import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  return (
    <div className="bg-white py-5 px-4 rounded-md">
      <ul className="flex flex-col gap-3">
        <TodoItem />
        <TodoItem />  
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  )
}
export default TodoList;
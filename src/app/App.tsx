import React, { useState } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todo, setTodo] = useState<string>("");

  function handleTodoAdd() {
    console.log(todo);
  }

  // eだけだとany型になるのでReact.EventCallbackで型を指定
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  return (
    <div className="min-h-screen bg-gray-300">
      <div className="pt-20">
        <div className="w-full max-w-md mx-auto px-2">
          <h1 className="text-2xl font-bold text-center">React ToDo App</h1>
        </div>
      </div>
      <div className="pt-10">
        <div className="w-full max-w-md mx-auto px-2">
          <TodoInput value={todo} onTodoAdd={handleTodoAdd} onChange={handleInputChange} />
        </div>
      </div>

      <div className="pt-5">
        <div className="w-full max-w-4xl mx-auto px-2">
          <TodoList />
        </div>
      </div>

    </div>
  )
}

export default App;
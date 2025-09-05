import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {
  // タスクを格納する配列
  const [todos, setTodos] = useState<string[]>([]);

  const todoStorage = localStorage.getItem('todos');
  
  // ロード時にlocalStorageからデータを読み込む
  useEffect(() => {
    if( todoStorage ) {
      setTodos(JSON.parse(todoStorage));
    } else {
      localStorage.setItem('todos', JSON.stringify([]));
    }
  }, []);
  

  // eだけだとany型になるのでReact.EventCallbackで型を指定
  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(todoStorage) {
      setTodos(JSON.parse(todoStorage));
    } else {
      localStorage.setItem('todos', JSON.stringify([]));
    }

    localStorage.setItem('todos', JSON.stringify([...todos, e.target["todoInput"].value]));
    setTodos([...todos, e.target["todoInput"].value]);
    e.target["todoInput"].value = "";
  }

  //todosからタスクを削除
  function handleDelete(index: number) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
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
          <TodoInput onAddTask={handleAddTask}  />
        </div>
      </div>

      <div className="pt-5">
        <div className="w-full max-w-4xl mx-auto px-2">
          <TodoList todos={todos} handleDelete={handleDelete}/>
        </div>
      </div>

    </div>
  )
}

export default App;
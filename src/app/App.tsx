import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

const TODO_KEY = 'todos';

function App() {
  // タスクを格納する配列
  const [todos, setTodos] = useState<Todo[]>([]);
  
  function init() {
    const todoStorage = localStorage.getItem(TODO_KEY);
    if(todoStorage) {
      setTodos(JSON.parse(todoStorage));
    } else {
      localStorage.setItem(TODO_KEY, JSON.stringify([]));
    }
  }

  window.addEventListener('load', init);

  function saveTodos(newTodos: Todo[]) {
    setTodos(newTodos);
    localStorage.setItem(TODO_KEY, JSON.stringify(newTodos));
  }

  function deleteTodos(id: number) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(newTodos);
  }

  // eだけだとany型になるのでReact.EventCallbackで型を指定
  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newText = e.target["todoInput"].value;
    if(newText.trim() === "") {
      return;
    }
    
    // タイムスタンプをミリ秒に変換しIDにする　→　コメントDate型はmsでないとうけつけないという理由にする
    // やってる理由を記述する
    const timestamp = new Date(e.timeStamp * 1000).getTime();
    console.log(timestamp);
    const newTodo: Todo = {
      id: timestamp,
      text: newText,
      completed: false
    }

    const updatedTodos = [...todos, newTodo];
    saveTodos(updatedTodos);
    e.target["todoInput"].value = "";
  }

  function handleComplete(id: number) {
    const newTodos = todos.map((todo) => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    );
    saveTodos(newTodos);
  }

  //todosからタスクを削除
  function handleDelete(id: number) {
    deleteTodos(id);
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

      <div className="pt-10">
        <div className="w-full max-w-md mx-auto px-2">

        </div>
      </div>

      <div className="pt-5">
        <div className="w-full max-w-4xl mx-auto px-2">
          <TodoList todos={todos} handleDelete={handleDelete} handleComplete={handleComplete} />
        </div>
      </div>

    </div>
  )
}

export default App;
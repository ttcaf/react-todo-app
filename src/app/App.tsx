import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import TodoSort from './components/TodoSort/TodoSort';
type Todo = {
  id: number;
  text: string;
  completed: boolean;
  priority: string;
}

const TODO_KEY = 'todos';

function App() {
  // タスクを格納する配列
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("all");

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

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newText = e.target["todoInput"].value;
    if(newText.trim() === "") {
      return;
    }
    
    // コメントDate型はmsでないとうけつけないという理由にする
    const timestamp = new Date(e.timeStamp * 1000).getTime();
    console.log(timestamp);
    const newTodo: Todo = {
      id: timestamp,
      text: newText,
      completed: false,
      priority: "medium",
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

  function handlePriority(id: number, priority: string) {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        switch(priority) {
          case "high":
            return { ...todo, priority: "medium" };
          case "medium":
            return { ...todo, priority: "low" };
          case "low":
            return { ...todo, priority: "high" };
          default:
            return todo;
        }
      }
      return todo;
    });
    saveTodos(newTodos);
  }

  function handleEdit(id: number, text: string) {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        return { ...todo, text: text };
      }
      return todo;
    });
    saveTodos(newTodos);
  }

  //todosからタスクを削除
  function handleDelete(id: number) {
    deleteTodos(id);
  }

  function handleSort(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const completed = e.target["completed"].value;
    switch(completed) {
      case "all":
        setFilter("all");
        break;
      case "completed":
        setFilter("completed");
        break;
      case "incompleted":
        setFilter("incompleted");
        break;
    }

    // リロードしたら元に戻るようにuseStateのみ変更を加える
    const order = e.target["order"].value;
    switch(order) {
      case "date":
        // IDを日時に設定しているのでID参照でソート
        const sortedTodosByDate = [...todos].sort((a, b) => a.id - b.id);
        setTodos(sortedTodosByDate);
        break;
      case "priority":
        const priorityOrder = {
          'high': 1,
          'medium': 2,
          'low': 3
        };
        const sortedTodosByPriority = [...todos].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        setTodos(sortedTodosByPriority);
        break;
    }
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
        <div className="w-full max-w-4xl mx-auto px-2">
          <TodoSort onSort={handleSort} />
        </div>
      </div>

      <div className="pt-15">
        <div className="w-full max-w-4xl mx-auto px-2">
          <TodoList todos={todos} handleDelete={handleDelete} handleComplete={handleComplete} filter={filter} handlePriority={handlePriority} handleEdit={handleEdit} />
        </div>
      </div>

    </div>
  )
}

export default App;
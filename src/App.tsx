import React from 'react';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddToDo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className='bg-gray-100 min-h-screen flex items-center justify-center'>

      <div className="bg-white rounded shadow p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
      </div>
    </TodoProvider>
  );
};

export default App
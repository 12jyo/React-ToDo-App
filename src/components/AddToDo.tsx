import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';
import { Todo } from '../types/Todo';
import { v4 as uuidv4 } from 'uuid';

const AddTodo: React.FC = () => {
  const { addTodo } = useTodos();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    };
    addTodo(newTodo);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3 mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;

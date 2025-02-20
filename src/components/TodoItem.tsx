import React from 'react';
import { Todo } from '../types/Todo';
import { useTodos } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div
      className={`p-4 border rounded mb-3 flex justify-between items-start ${
        todo.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-300'
      }`}
    >
      <div>
        <h3
          className={`text-lg font-semibold mb-1 ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {todo.title}
        </h3>
        <p className="text-sm text-gray-700 mb-1">{todo.description}</p>
        {todo.dueDate && (
          <p className="text-xs text-gray-500">
            Due: {new Date(todo.dueDate).toLocaleDateString()}
          </p>
        )}
      </div>
      <div className="flex flex-col space-y-2 ml-4">
        <button
          onClick={() => toggleTodo(todo.id)}
          className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 transition-colors"
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

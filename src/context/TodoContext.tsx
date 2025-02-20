import React, { createContext, useContext, useState, useEffect } from 'react';
import { Todo } from '../types/Todo';

interface TodoContextProps {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  reorderTodos: (startIndex: number, endIndex: number) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos(prev => [...prev, todo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const reorderTodos = (startIndex: number, endIndex: number) => {
    const result = Array.from(todos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setTodos(result);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, reorderTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

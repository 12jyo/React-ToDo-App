import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { useTodos } from '../context/TodoContext';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DragStart,
} from '@hello-pangea/dnd';

const TodoList: React.FC = () => {
  const { todos, reorderTodos } = useTodos();
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [isDragging, setIsDragging] = useState(false);

  const filteredTodos = !isDragging
    ? todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
      })
    : todos;

  const handleDragStart = (start: DragStart) => {
    setIsDragging(true);
  };

  const handleDragEnd = (result: DropResult) => {
    setIsDragging(false);
    if (!result.destination) return;
    reorderTodos(result.source.index, result.destination.index);
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded border transition-colors ${
              filter === 'all'
                ? 'bg-blue-500 text-white border-blue-500'
                : 'border-gray-300 hover:bg-blue-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1 rounded border transition-colors ${
              filter === 'completed'
                ? 'bg-blue-500 text-white border-blue-500'
                : 'border-gray-300 hover:bg-blue-100'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1 rounded border transition-colors ${
              filter === 'pending'
                ? 'bg-blue-500 text-white border-blue-500'
                : 'border-gray-300 hover:bg-blue-100'
            }`}
          >
            Pending
          </button>
        </div>
        <div className="text-sm text-gray-600">
          <span className="mr-4">Completed: {completedCount}</span>
          <span>Pending: {pendingCount}</span>
        </div>
      </div>

      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div
              className="mt-4 h-64 overflow-y-auto"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {filteredTodos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem todo={todo} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;

# React To-Do List Application

A simple and modern To-Do List application built with React and TypeScript. This project features task creation, filtering, drag-and-drop reordering, and a clean responsive UI styled with Tailwind CSS. Drag-and-drop functionality is implemented using [@hello-pangea/dnd](https://github.com/hello-pangea/dnd), a maintained fork of react-beautiful-dnd.

## Features

- **Task Management:**  
  - Add a new task with a title, description, and due date.
  - Mark tasks as completed or undo completion.
  - Delete tasks.

- **Filtering & Counts:**  
  - Filter tasks by All, Completed, or Pending.
  - Display counts of completed and pending tasks.

- **Drag-and-Drop:**  
  - Reorder tasks using drag-and-drop functionality powered by @hello-pangea/dnd.

- **Responsive UI:**  
  - Styled with Tailwind CSS for a modern, responsive look.
  
- **State Management:**  
  - Managed using React Context API for clean and modular code.

## Tech Stack

- **React** with **TypeScript**
- **Tailwind CSS** for styling
- **@hello-pangea/dnd** for drag-and-drop functionality
- **UUID** for generating unique task IDs

## Project Structure

react-to-do-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── AddTodo.tsx
│   │   ├── TodoItem.tsx
│   │   ├── TodoList.tsx
│   ├── context/
│   │   └── TodoContext.tsx
│   ├── types/
│   │   └── Todo.ts
│   ├── App.tsx
│   └── index.tsx
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md


## Clone the Repository:

git clone https://github.com/12jyo/React-ToDo-App.git
cd react-to-do-app

## Install Dependencies:

Using npm:

npm install

Or using Yarn:

yarn install

## Configure Tailwind CSS:

Ensure your tailwind.config.js includes the correct paths. For example:

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

## Run the Application:

npm start

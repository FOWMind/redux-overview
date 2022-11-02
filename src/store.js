import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + (action.payload || 1);
    case "DECREASE":
      return state - (action.payload || 1);
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case "@todos/add": {
      return [...todos, { ...action.payload }];
    }

    case "@todos/remove": {
      const id = action.payload;
      const newTodos = todos.filter((todo) => todo.id !== id);
      return newTodos;
    }

    case "@todos/setActive": {
      const id = action.payload;
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          const modifiedTodo = { ...todo, active: !todo.active };
          return modifiedTodo;
        }
        return todo;
      });
      return newTodos;
    }

    default: {
      return todos;
    }
  }
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

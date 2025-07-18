import { createSlice } from "@reduxjs/toolkit";
const commonSlice = createSlice({
  name: "common",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      console.log("Todo added:", action.payload);
    },
    removeTodo: (state, action) => {
      console.log("Removing todo with id:", action);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      console.log("Updating todo with id:", action.payload.id);
      console.log("New data:", action.payload);
      const index = state.todos.findIndex(
        (todo) => todo.id == action.payload.id
      );
      console.log("index:", index);
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], ...action.payload };
      }
    },

    clearTodos: (state) => {
      state.todos = [];
    },
  },
});
export const { addTodo, removeTodo, updateTodo, clearTodos } =
  commonSlice.actions;
export default commonSlice.reducer;

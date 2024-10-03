
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    filter: 'all',
    editId: null,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toLocaleString(), // Add createdAt timestamp
        completedAt: null, // Initialize completedAt as null
      };
      state.items.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        if (todo.completed) {
          todo.completedAt = new Date().toLocaleString(); // Set completedAt timestamp when completed
        } else {
          todo.completedAt = null; // Reset completedAt if not completed
        }
      }
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
      state.editId = null;
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setFilter, editTodo, setEditId } = todosSlice.actions;
export default todosSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        // id: uuid(),
        text: action.payload,
      };

      state.push(todo);
    },
  },
});

// this is for dispatch
export const { addTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;

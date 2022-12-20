import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./slices/todoSlice";

export default configureStore({
  reducer: {
    todos: toDoReducer,
  },
});

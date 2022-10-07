import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../mock/todolist.json";
import { v4 as uuid } from "uuid";

const initialState = mockData;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const NEWTODO = { id: uuid(), title: action.payload, completed: false };
      return [...state, NEWTODO];
    },
    deletedTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    checkedTodo: (state, action) => {
      return state.map((todolist) =>
        todolist.id === action.payload
          ? { ...todolist, completed: !todolist.completed }
          : todolist
      );
    },
  },
});

export const { addTodo, deletedTodo, checkedTodo } = todoSlice.actions;

export default todoSlice.reducer;

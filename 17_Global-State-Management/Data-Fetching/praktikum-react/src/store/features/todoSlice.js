import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APITodo from "../../apis/todo.api";

const initialState = {
  data: [],
  componentStatus: false,
};

export const fetchTodo = createAsyncThunk("fetchTodo/todo", async () => {
  try {
    const res = await APITodo.getAllTodo();
    return res.data.todolist;
  } catch (err) {
    console.log(err.message);
  }
});

export const createTodo = createAsyncThunk("create/todos", async (data) => {
  try {
    const response = await APITodo.createTodos(data);
    return response.data.insert_todolist;
  } catch (error) {
    console.log(error);
  }
});

export const deleteTodo = createAsyncThunk("delete/todos", async (id) => {
  try {
    const response = await APITodo.deleteTodoById(id);
    return response.data.delete_todolist.returning[0];
  } catch (error) {
    console.log(error);
  }
});
export const onChecked = createAsyncThunk(
  "update/todos",
  async ({ id, completed }) => {
    try {
      const response = await APITodo.updateTodo({ id, completed });
      return response.data.update_todolist;
    } catch (error) {
      console.log(error);
    }
  }
);
const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.componentStatus = !state.componentStatus;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.fetchStatus = !state.fetchStatus;
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      })
      .addCase(onChecked.fulfilled, (state, action) => {
        state.componentStatus = !state.componentStatus;
      });
  },
});

export default todoSlice.reducer;

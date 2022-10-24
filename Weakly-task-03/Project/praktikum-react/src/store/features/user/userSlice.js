import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIUser from "../../../apis/User/user.api";

export const getUsers = createAsyncThunk("fetch/users", async () => {
  try {
    const response = await APIUser.getAllUser();
    return response.data.result;
  } catch (error) {
    console.log(error.response);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  extraReducers(builder) {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default userSlice.reducer;
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import APIUser from "../../../apis/User/user.api";

// export const getUsers = createAsyncThunk("fetch/users", async () => {
//   try {
//     const res = await APIUser.getAllUsers();
//     return res.data.results;
//   } catch (err) {
//     console.log(err.response);
//   }
// });

// export const userSlice = createSlice({
//   name: "user",
//   initialState: [],
//   extraReducers(builder) {
//     builder.addCase(getUsers.fulfilled, (state, action) => {
//       return (state = action.payload);
//     });
//   },
// });

// export default userSlice.reducer;

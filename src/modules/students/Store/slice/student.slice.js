import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../Utiles/axios";

export const fetchstudents = createAsyncThunk("students/fetch", async () => {
  return await axiosInstance
    .get("https://datatask5.onrender.com/students")
    .then((res) => ( res.data));
      ;
});



const studentsReducer = createSlice({
  name: "students",
  initialState: {
    data: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchstudents .fulfilled, (state, action) => {
      state.data = action.payload;
    });
   
  },
});

export default studentsReducer.reducer;
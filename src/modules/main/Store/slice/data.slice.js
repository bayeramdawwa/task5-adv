import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../Utiles/axios";

export const fetchCourses = createAsyncThunk("courses/fetch", async () => {
  return await axiosInstance
    .get("https://datatask5.onrender.com/course")
    .then((res) => res.data);
  
});



const coursesReducer = createSlice({
  name: "courses",
  initialState: {
    data: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCourses .fulfilled, (state, action) => {
      state.data = action.payload;
    });
   
  },
});

export default coursesReducer.reducer;
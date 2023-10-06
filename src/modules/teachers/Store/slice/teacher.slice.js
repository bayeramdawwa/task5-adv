import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../Utiles/axios";

export const fetchteachers = createAsyncThunk("teachers/fetch", async () => {
  return await axiosInstance
    .get("https://datatask5.onrender.com/teachers")
    .then((res) => ( res.data));
      ;
});



const teachersReducer = createSlice({
  name: "teachers",
  initialState: {
    data: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchteachers .fulfilled, (state, action) => {
      state.data = action.payload;
    });
   
  },
});

export default teachersReducer.reducer;
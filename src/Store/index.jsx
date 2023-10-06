import { applyMiddleware , configureStore, createStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk"
import coursesSlice from "../modules/main/Store/slice/data.slice"
import teacherSlice from "../modules/teachers/Store/slice/teacher.slice";
import studentSlice from "../modules/students/Store/slice/student.slice";

const reducers = {
    reducer:{
        courses: coursesSlice,
        teachers: teacherSlice,
        students: studentSlice,
    }, 
}
const store = configureStore(reducers, applyMiddleware(reduxThunk))


export default store;
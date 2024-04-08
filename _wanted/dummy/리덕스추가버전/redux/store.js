import bucket from "./slices/bucket"
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    bucket: bucket,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store
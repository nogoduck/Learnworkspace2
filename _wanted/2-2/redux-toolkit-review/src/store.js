import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cat from "./redux/slices/cat";

const rootReducer = combineReducers({ cat });

const store = configureStore({ reducer: rootReducer });

export default store;

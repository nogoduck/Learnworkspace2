import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import cat from "./modules/cat";
import dog from "./slices/dog";

const rootReducer = combineReducers({
  cat,
  dog,
});

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({ reducer: rootReducer });

export default store;

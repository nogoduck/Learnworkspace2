import { combineReducers, createStore } from "redux";
import cat from "./modules/cat";

const rootReducer = combineReducers({
  cat,
});

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENDSION__ &&
  window.__REDUX_DEVTOOLS_EXTENDSION__();

const store = createStore(rootReducer, enhancer);

export default store;

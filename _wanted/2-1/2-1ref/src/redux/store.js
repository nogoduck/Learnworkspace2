

import {createStore, combineReducers} from "redux";

import {configureStore} from "@reduxjs/toolkit";

// import cat from "./modules/cat";

import cat from "./modules/cat";
import dog from "./slices/dog";




const rootReducer = combineReducers({
  cat,
  dog
});



const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(rootReducer, enhancer);

const store = configureStore({reducer: rootReducer});
// const store = configureStore(리듀서 묶음 들어가야 한다 , 미들웨어 묶음 들어가야 한다);

export default store;

// const store = createStore([값을 넣어줘야함], [미들웨어 자리]);

// export default store;
// [ 리덕스 툴킷 예제 ]
import {combineReducers} from "redux";

import dog from './redux/slices/dog'
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({dog})

const store = configureStore({reducer: rootReducer})


export default store;

// [ 리덕스 예제 ]
// // store는 전역자정소로 값이랑 해당 값을 바꿔주는 역할을 한다.
//
// import {createStore, combineReducers} from "redux";
// import cat from "./redux/modules/cat";
// import home from "./redux/modules/home";
//
// // const store = createStore(값을 변경하는 대상, 미들웨어(옵션));
// // 리덕스에서는 저장소가 하나만 있어야한다 그래서 리듀서를 여러개 만들면 하나로 묶어주는 작업이 필요하다. (combineReducers{넣고싶은 리듀서 넣기})
//
// const rootReducer = combineReducers({home, cat});
//
// // const store = createStore(rootReducer)
// // export default store;
//
// export default createStore(rootReducer);
//
//
// // 리덕스 툴킷: 너네 값이랑 이값 어떻게 바꿀지만 알려주면 나머진 내가 다 할게
// // 슬라이스를 만들어서 값이랑 값 바꾸는 로직만 작성해주면 나머진 툴킷이 알아서 한다.
// // 슬라이스의 구조: 슬라이스는 액션들하고, 리듀서를 반환하는 함수다.
// // EX. 내 슬라이스 = createSlice(값, 값 어떻게 바꿀지)
//
//

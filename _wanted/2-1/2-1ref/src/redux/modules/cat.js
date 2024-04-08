import {createSlice} from "@reduxjs/toolkit";

// 슬라이스는 액션생성함수랑, 리듀서를 합친 친구

// cat이라는 모듈을 만들고 거기에다가 값은 이거야, 이거는 이렇게 바꾸고 싶어

// 값은 이거야!
const initialState = {
  cat_arr: [],
};



const catSlice = createSlice({
  name : "CAT",
  initialState,
  reducers: {
    addCat: (state, action) => {
      console.log(action.payload);
      state.cat_arr.push(action.payload);
    }
  }

});

export const {addCat} = catSlice.actions;
export default catSlice.reducer;

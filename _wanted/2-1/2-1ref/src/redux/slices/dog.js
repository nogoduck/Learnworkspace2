import {createSlice} from '@reduxjs/toolkit';

// 값이 필요해
const initialState = {
  dog_arr: [],
};


// immer를 내장하고 있다
// 불변성을 유지해주는 친구인데, 리듀서는 순수함수여야 하니까 
// state가 막 바뀌어버리면 안되니까!!!!
// state를 바꿔주는게 아니라 새로운 state를 만들어주는거야

// 값을 바꿔줄 무언가가 필요해 -> 액션이었다!
const dogSlice = createSlice({
  name : "DOG",
  initialState: initialState,
  reducers: {
    addDog: (state, action) => {
      console.log(state, action);
      state.dog_arr.push(action.payload);
    }
  },
});


export const {addDog} = dogSlice.actions;

export default dogSlice.reducer;
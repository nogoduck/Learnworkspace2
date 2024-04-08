import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dog_arr: [],
};

const dogSlice = createSlice({
  name: "DOG",
  initialState: initialState,
  reducers: {
    addDog: (state, action) => {
      console.log(state, action);
      state.dog_arr.push(action.payload);
    },
  },
});

export const { addDog } = dogSlice.actions;

export default dogSlice.reducer;

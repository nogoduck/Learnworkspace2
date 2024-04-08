import { createSlice } from "@reduxjs/toolkit";

const dogSlice = createSlice({
  initialState: { dog_arr: ["누리", "소미"] },
  reducers: {
    addDog: (state, action) => {
      state.dog_arr.push(action.payload);
    },
  },
});

export const { addDog } = dogSlice.actions;

export default dogSlice.reducer;

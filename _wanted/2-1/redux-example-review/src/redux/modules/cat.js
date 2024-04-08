import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cat_arr: [],
};

const catSlice = createSlice({
  name: "CAT",
  initialState,
  reducers: {
    addCat: (state, action) => {
      console.log(action.payload);
      state.cat_arr.push(action.payload);
    },
  },
});

export const { addCat } = catSlice.actions;
export default catSlice.reducer;

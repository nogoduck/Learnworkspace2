import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
  name: "cat",
  initialState: {
    cat_arr: ["perl", "rubi"],
  },
  reducers: {
    addCat: (state, action) => {
      // state.cat_arr.push(action.payload);
      state.cat_arr.push("고양이");
    },
    removeCat: (state, action) => {
      state.cat_arr.pop();
    },
  },
});

export const { addCat, removeCat } = catSlice.actions;

export default catSlice.reducer;

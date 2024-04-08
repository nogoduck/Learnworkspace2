import { createSlice } from "@reduxjs/toolkit";

const bucketSlice = createSlice({
    name: "bucket",
    initialState: {bucket_arr: []},
    reducers: {
        addBucket2: (state, action) => {
            state.bucket_arr.push(action.payload);

            const bucketText = document.getElementById("bucketText");
            bucketText.value = "";
        }
    },
})

export const {addBucket2} = bucketSlice.actions;

export default bucketSlice.reducer;
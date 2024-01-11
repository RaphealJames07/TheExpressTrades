import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tradeUser: {},
};

const features = createSlice({
    name: "expressTrade",
    initialState,
    reducers: {
        user: (state, {payload}) => {
            state.tradeUser = payload
            console.log("User Data:", payload);
        },
        logout: (state) => {
            state.tradeUser = {};
        },
    },
});

export const {
  user,
  logout,
} = features.actions;

export default features.reducer;

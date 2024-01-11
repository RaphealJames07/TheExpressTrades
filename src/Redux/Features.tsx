import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tradeUser: {},
    userToken: ""
};

const features = createSlice({
    name: "expressTrade",
    initialState,
    reducers: {
        user: (state, {payload}) => {
            state.tradeUser = payload
            console.log("User Data:", payload);
        },
        token: (state, {payload}) => {
            state.userToken = payload
            console.log("User Token:", payload);
        },
        logout: (state) => {
            state.tradeUser = {};
            state.userToken = ""
        },
    },
});

export const {
  user,
  logout,
  token,
} = features.actions;

export default features.reducer;

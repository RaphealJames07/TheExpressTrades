import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tradeUser: {},
    userToken: "",
    getOneUser: {},
    transactions: []
};

const features = createSlice({
    name: "expressTrade",
    initialState,
    reducers: {
        user: (state, {payload}) => {
            state.tradeUser = payload
            console.log("User Data:", payload);
        },
        oneUser: (state, {payload}) => {
            state.getOneUser = payload
            console.log("Get One User Data:", payload);
        },
        userTransactions: (state, {payload}) => {
            state.transactions = payload
            console.log("User Data Transactions:", payload);
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
  oneUser,
  userTransactions,
} = features.actions;

export default features.reducer;

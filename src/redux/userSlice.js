import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        RegError: false,
    },
    reducers: {
        // login
        loginStart: (state) => {
            state.isFetching=true
            state.error=false
            console.log("Login start")
        },
        loginSuccess: (state, action) => {
            state.isFetching=false;
            state.currentUser=action.payload
            console.log("Login Success")
        },
        loginFailure: (state) => {
            state.isFetching=false
            state.error=true
            console.log("Login Failure")
        },
        // register
        registerStart: (state) => {
            state.isFetching=true
            state.error=false
            console.log("Reg start")
        },
        registerSuccess: (state, action) => {
            state.isFetching=false;
            state.currentUser=action.payload
            console.log("Reg Success")
        },
        registerFailure: (state) => {
            state.isFetching=false
            state.error=true
            console.log("Reg Failure")
        }
    }
})

export const {loginStart, loginSuccess,
                loginFailure, registerStart,
                registerSuccess, registerFailure} = userSlice.actions
export default userSlice.reducer;
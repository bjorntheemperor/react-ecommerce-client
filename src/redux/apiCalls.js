import {loginFailure, loginStart, loginSuccess, loginMessage, registerFailure, registerStart, registerSuccess} from "./userSlice";
import {publicRequest} from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    }catch (err){
        dispatch(loginFailure())
        dispatch(loginMessage())
    }
}
export const register = async (dispatch, user) => {
    dispatch(registerStart())
    try{
        const res = await publicRequest.post("/auth/register", user)
        dispatch(registerSuccess(res.data))
    } catch (err){
        dispatch(registerFailure())
    }
}
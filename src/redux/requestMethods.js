import axios from "axios";

const BASE_URL = "http://localhost:7777/api/"
// const BASE_URL = "http://185.27.134.34/api/"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken


export const publicRequest  = axios.create({
    baseURL: BASE_URL,
})

export const userRequest  = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})


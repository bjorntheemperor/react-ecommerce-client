import axios from "axios";

const BASE_URL = "http://localhost:7777/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmU4ZGE5NWQ1MmQ4YWI2NDVhODI2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTYxMTMyNywiZXhwIjoxNjYxODcwNTI3fQ.VScNcwQQn9vXwrdwgO5Mj-pPDYJdsO6RNxJJaE8hVYc"

export const publicRequest  = axios.create({
    baseURL: BASE_URL,

})

export const userRequest  = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})


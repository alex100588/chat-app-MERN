import axios from "axios"

export const axiosInstace = axios.create({
    baseURL: "http://localhost5001/api",
    // send the cookies in every request
    withCredentials: true
})
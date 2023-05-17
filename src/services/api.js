import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-rocketnotes-52w5.onrender.com"
});
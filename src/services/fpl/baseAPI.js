import axios from "axios";

export const baseAPI = axios.create({
    baseURL : "https://fantasy.premierleague.com/api/fixtures/?future=1"
})
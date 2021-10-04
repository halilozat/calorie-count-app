import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5001/api/v1/food' })


export const getApiData = async (query) => {
    const res = await API.post('/getFoods', query)
}
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5001/api' })

export const getApiData = async (query) =>
    await API.post('/food/getFoods', query)
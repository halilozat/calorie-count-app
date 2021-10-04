import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5001/api/v1' })

export const getApiData = async (query, dispatch) => {
    dispatch({ type: "GET_DATA_START" });
    try {
        const res = await API.post('/food/getFoods', query)
        dispatch({ type: "GET_DATA_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "GET_DATA_FAILURE", payload: error })
    }
}
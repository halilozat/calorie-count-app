/** Dependencies */
import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5001/api/v1/auth' })

axios.interceptors.request.use(
    function (config) {
        const { origin } = new URL(config.url);

        const allowedOrigins = [process.env.REACT_BASE_ENDPOINT]

        const token = localStorage.getItem('access-token')

        if (allowedOrigins.includes(origin)) {
            config.headers.authorization = token;
        }

        return config;
    }
)

export const fetchRegister = async (input) => {
    const { data } = await API.post("/register", input)

    return data;
};

export const fetchLogin = async (input) => {
    const { data } = await API.post("/login", input)

    return data;
};

export const fetchMe = async () => {
    const { data } = await API.post("/me")
    return data;
};

export const fetchLogout = async () => {
    const { data } = await API.post("/logout");

    return data;
};
import axios from 'axios';
import 'dotenv/config'

const instance = axios.create({
    baseURL:"http://localhost:8080"
    // process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true
});

instance.interceptors.response.use(
    (response) => {
        const {data} = response;
        return response.data;

    }
);

export default instance;

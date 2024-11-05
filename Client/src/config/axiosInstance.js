import axios from "axios";
const localhostURL = import.meta.env.VITE_LOCALHOST

const axiosInstance = axios.create({
    baseURL: localhostURL 
});

export default axiosInstance;
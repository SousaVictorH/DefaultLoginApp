import axios from 'axios';

const api = axios.create({
    baseURL: 'https://login-statements.herokuapp.com/',
    // baseURL: 'https://localhost:8000/',
    timeout: 1000
});

export default api;
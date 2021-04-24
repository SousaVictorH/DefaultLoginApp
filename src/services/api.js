import axios from 'axios';

const api = axios.create({
    baseURL: 'https://login-statements.herokuapp.com/',
    // baseURL: 'http://192.168.15.18:8000',
    timeout: 1000
});

export default api;
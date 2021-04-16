import axios from 'axios';

const api = axios.create({
    baseURL: 'https://login-statements.herokuapp.com/',
    timeout: 1000
});

export default api;
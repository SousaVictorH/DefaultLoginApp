import api from '../services/api';

import { LOGIN, SIGN_UP } from '../services/url';

export const requestLogin = async (email, password) => {
    try {
        const data = { email, password };
        
        const response = await api.post(LOGIN, data);

        return response;
    } catch (error) {
        return { error };
    }
};

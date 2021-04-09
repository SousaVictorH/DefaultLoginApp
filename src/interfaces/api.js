import api from '../services/api';

import { LOGIN, SIGN_UP } from '../../core/url';

export const requestLogin = async (email, password) => {
    try {
        const data = { email, password };
        
        return await api.post(LOGIN, data);
    } catch (error) {
        return { error };
    }
};

export const requestSignUp = async (values) => {
    try {
        const data = {
            
        };

        return await api.post(SIGN_UP, data);
    } catch (error) {
        return { error };
    }
};

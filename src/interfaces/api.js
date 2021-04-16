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
            name: values.name,
            genre: values.genre,
            dateOfBirth: values.dateOfBirth,
            email: values.email,
            password: values.password,
            phone: values.phone,
            address: {
                street: values.street,
                city: values.city,
                zipCode: values.zipCode,
                district: values.district,
                complement: values.complement,
                uf: values.uf,
                number: values.number
            }
        }

        return await api.post(SIGN_UP, data);
    } catch (error) {
        return { error };
    }
};

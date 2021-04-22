import api from '../services/api';

import {
    LOGIN,
    SIGN_UP,
    RECOVER,
    SWITCH,
    UPDATE,
} from '../../core/url';

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

export const requestAccountRecover = async (email) => {
    try {
        const data = {
            email
        };

        await api.post(RECOVER, data);
    } catch (error) {
        return { error };
    }
};

export const requestSwitch = async (values) => {
    try {
        const data = {
            email: values.email,
            token: values.token,
            password: values.password
        };

        await api.post(SWITCH, data);
    } catch (error) {
        return { error };
    }
};


export const requestPassUpdate = async (id, password, token) => {
    try {
        const data = {
            userID: id,
            password: password,
        };

        const config = {
            headers: { auth: token }
        }

        return await api.patch(UPDATE, data, config);
    } catch (error) {
        return { error };
    }
};

export const requestUserUpdate = async (values) => {
    try {
        const data = {
            userID: values.id,
            name: values.name,
            genre: values.genre,
            dateOfBirth: values.dateOfBirth,
            email: values.email,
            phone: values.phone,
        };

        const config = {
            headers: { auth: values.token }
        }
        
        return await api.patch(UPDATE, data, config);
    } catch (error) {
        return { error };
    }
};

export const requestAddressUpdate = async (values) => {
    try {
        const data = {
            userID: values.id,
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

        const config = {
            headers: { auth: values.token }
        }

        return await api.patch(UPDATE, data, config);
    } catch (error) {
        return { error };
    }
};

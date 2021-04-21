export function requestLogin() {
    return {
        type: 'REQUEST_LOGIN',
    };
};

export function sucessLogin(userData = {}) {
    return{
        type: 'SUCCESS_LOGIN',
        payload: { ...userData },
    };
};

export function failureLogin() {
    return {
      type: 'FAILURE_LOGIN',
    };
};
  
export function requestLogout() {
    return {
        type: 'REQUEST_LOGOUT',
    };
};

export function updateState(data = {}) {
    return{
        type: 'UPDATE_STATE',
        payload: { ...data },
    }
};
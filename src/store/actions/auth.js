export function requestLogin(email, password) {
    return {
      type: 'REQUEST_LOGIN',
      payload: { email, password },
    };
};
  
export function requestLogout() {
    return {
    type: 'REQUEST_LOGOUT',
    };
};
  
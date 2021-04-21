const INITIAL_STATE = {
    data: undefined,
    logged: false,
    loading: false,
    error: false,
};
  
export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'REQUEST_LOGIN':
        return { ...state, loading: true };
  
      case 'SUCCESS_LOGIN':
        return {
          data: action.payload,
          logged: true,
          loading: false,
          error: false,
        };
  
      case 'FAILURE_LOGIN':
        return {
          data: undefined,
          logged: false,
          loading: false,
          error: true,
        };
  
      case 'REQUEST_LOGOUT':
        return INITIAL_STATE;

      case 'UPDATE_STATE':
        return {
          data: action.payload,
          logged: true,
          loading: false,
          error: false,
        };
  
      default:
        return state;
    }
};
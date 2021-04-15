const INITIAL_STATE = {
    name: '',
    genre: '',
    dateOfBirth: '',
    email: '',
    password: '',
    phone: '',
    zipCode: '',
    city: '',
    uf: '',
    street: '',
    district: '',
    number: '',
    complement: '',
};
  
export default function signUpScreen(state = INITIAL_STATE, action) {
    switch (action.type) {
  
        case 'UPDATE_STATE':
            return { ...state, ...action.payload };
  
        case 'RESET':
            return INITIAL_STATE;
  
        default:
            return state;
    }
}
  
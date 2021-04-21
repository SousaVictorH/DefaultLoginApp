import * as yup from 'yup';

import { 
  PASSWORD_REQUIRED,
  INVALID_PASSWORD,
  CONFIRM_PASSWORD_INCORRECT,
  CONFIRM_PASSWORD_REQUIRED,
} from '../../../constants/errors';

const validateSwitch = yup.object().shape({
    password: yup
    .string()
    .trim()
    .required(PASSWORD_REQUIRED) 
    .test('len', INVALID_PASSWORD, value => {
      return value?.length >= 7;
    }),
  
    confirmPassword: yup
    .string()
    .trim()
    .equals([yup.ref('password')], CONFIRM_PASSWORD_INCORRECT)
    .required(CONFIRM_PASSWORD_REQUIRED),
});

export default validateSwitch;
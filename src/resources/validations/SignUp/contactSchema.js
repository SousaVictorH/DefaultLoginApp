import * as yup from 'yup';

import { 
  EMAIL_MALFORMED,
  PHONE_MALFORMED,
  PASSWORD_REQUIRED,
  INVALID_PASSWORD,
  PHONE_INVALID,
  CONFIRM_PASSWORD_INCORRECT,
  CONFIRM_PASSWORD_REQUIRED,
} from '../../../constants/errors';

const validateContact = yup.object().shape({
  email: yup.string().trim().email(EMAIL_MALFORMED).required(EMAIL_MALFORMED),

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

  phone: yup.string().trim().length(15, PHONE_INVALID).required(PHONE_MALFORMED),
});

export default validateContact;

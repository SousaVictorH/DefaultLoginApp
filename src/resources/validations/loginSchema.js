import { INVALID_PASSWORD, PASSWORD_REQUIRED, EMAIL_MALFORMED } from '../../constants/errors';

import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().trim().email(EMAIL_MALFORMED).required(EMAIL_MALFORMED),

  password: yup
  .string()
  .trim()
  .required(PASSWORD_REQUIRED) 
  .test('len', INVALID_PASSWORD, value => {
    return value?.length >= 7;
  }),
});

export default loginSchema;

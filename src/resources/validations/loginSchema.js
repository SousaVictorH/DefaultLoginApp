import { REQUIRED, EMAIL_MALFORMED } from '../../constants/errors';

import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email(EMAIL_MALFORMED).required(REQUIRED),

  password: yup.string().required(REQUIRED),
});

export default loginSchema;

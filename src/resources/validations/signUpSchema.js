import { REQUIRED, EMAIL_MALFORMED } from '../../constants/errors';

import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  name: yup.string().required(REQUIRED),

  genre: yup.string().required(REQUIRED),

  dateOfBirth: yup.string().required(REQUIRED),

  email: yup.string().email(EMAIL_MALFORMED).required(REQUIRED),

  password: yup.string().required(REQUIRED),

  phone: yup.string().required(REQUIRED),

  zipCode: yup.string().required(REQUIRED),

  city: yup.string().required(REQUIRED),

  uf: yup.string().max(2).required(REQUIRED),

  street: yup.string().required(REQUIRED),

  district: yup.string().required(REQUIRED),

  number: yup.string().required(REQUIRED),

  complement: yup.string(),
});

export default signUpSchema;
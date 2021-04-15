import * as yup from 'yup';
import moment from 'moment';

import { 
  REQUIRED, 
  EMAIL_MALFORMED, 
  PHONE_INVALID,
  INCORRECT_DATE_OF_BIRTH,
  FUTURE_DATE,
  CONFIRM_PASSWORD_INCORRECT,
  ZIPCODE_MALFORMED,
  UF_MALFORMED,
  ACCEPT_OUR_TERMS
} from '../../constants/errors';

export const validateInformations = yup.object().shape({
  name: yup.string().required(REQUIRED),

  genre: yup.string().required(REQUIRED),

  dateOfBirth: yup
  .string()
  .trim()
  .length(10, INCORRECT_DATE_OF_BIRTH)
  .test('future date', FUTURE_DATE, value => {
    if (value?.length === 10) {
      return moment().diff(moment(value, 'DD/MM/YYYY'), 'days', true) > 0;
    }
  })
  .required(REQUIRED),
});

export const validateContact = yup.object().shape({
  email: yup.string().trim().email(EMAIL_MALFORMED).required(REQUIRED),

  password: yup.string().trim().required(REQUIRED),

  confirmPassword: yup
  .string()
  .trim()
  .equals([yup.ref('password')], CONFIRM_PASSWORD_INCORRECT)
  .required(REQUIRED),

  phone: yup.string().trim().length(15, PHONE_INVALID).required(REQUIRED),
});

export const validateAddress = yup.object().shape({
  zipCode: yup.string().trim().length(9, ZIPCODE_MALFORMED).required(REQUIRED),

  city: yup.string().trim().required(REQUIRED),

  uf: yup.string().trim().length(2, UF_MALFORMED).required(REQUIRED),

  street: yup.string().trim().required(REQUIRED),

  district: yup.string().trim().required(REQUIRED),

  number: yup.number().required(REQUIRED),

  complement: yup.string().trim(),
});

export const validateTerms = yup.object().shape({
  confirmation: yup.boolean(),
});

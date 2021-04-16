import * as yup from 'yup';
import moment from 'moment';

import { 
  EMAIL_MALFORMED,
  PHONE_MALFORMED,
  ZIPCODE_MALFORMED,
  INCORRECT_NAME,
  INCORRECT_DATE_OF_BIRTH,
  INCORRECT_GENRE,
  PASSWORD_REQUIRED,
  INVALID_PASSWORD,
  PHONE_INVALID,
  CONFIRM_PASSWORD_INCORRECT,
  CONFIRM_PASSWORD_REQUIRED,
  ZIPCODE_REQUIRED,
  NUMBER_REQUIRED,
  CITY_REQUIRED,
  DISTRICT_REQUIRED,
  STREET_REQUIRED,
  UF_REQUIRED,
  UF_MALFORMED,
  FUTURE_DATE,
  ACCEPT_OUR_TERMS
} from '../../constants/errors';

export const validateInformations = yup.object().shape({
  name: yup.string().required(INCORRECT_NAME),

  genre: yup.string().required(INCORRECT_GENRE),

  dateOfBirth: yup
  .string()
  .trim()
  .length(10, INCORRECT_DATE_OF_BIRTH)
  .test('future date', FUTURE_DATE, value => {
    if (value?.length === 10) {
      return moment().diff(moment(value, 'DD/MM/YYYY'), 'days', true) > 0;
    }
  })
  .required(INCORRECT_DATE_OF_BIRTH),
});

export const validateContact = yup.object().shape({
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

export const validateAddress = yup.object().shape({
  zipCode: yup.string().trim().length(9, ZIPCODE_MALFORMED).required(ZIPCODE_REQUIRED),

  city: yup.string().trim().required(CITY_REQUIRED),

  uf: yup.string().trim().length(2, UF_MALFORMED).required(UF_REQUIRED),

  street: yup.string().trim().required(STREET_REQUIRED),

  district: yup.string().trim().required(DISTRICT_REQUIRED),

  number: yup.number().required(NUMBER_REQUIRED),

  complement: yup.string().trim(),
});

export const validateTerms = yup.object().shape({
  confirmation: yup.boolean().required(ACCEPT_OUR_TERMS),
});

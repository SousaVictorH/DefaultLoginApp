import * as yup from 'yup';

import { 
  ZIPCODE_MALFORMED,
  ZIPCODE_REQUIRED,
  NUMBER_REQUIRED,
  CITY_REQUIRED,
  DISTRICT_REQUIRED,
  STREET_REQUIRED,
  UF_REQUIRED,
  UF_MALFORMED,
} from '../../../constants/errors';

const validateAddress = yup.object().shape({
  zipCode: yup.string().trim().length(9, ZIPCODE_MALFORMED).required(ZIPCODE_REQUIRED),

  city: yup.string().trim().required(CITY_REQUIRED),

  uf: yup.string().trim().length(2, UF_MALFORMED).required(UF_REQUIRED),

  street: yup.string().trim().required(STREET_REQUIRED),

  district: yup.string().trim().required(DISTRICT_REQUIRED),

  number: yup.number().required(NUMBER_REQUIRED),

  complement: yup.string().trim(),
});

export default validateAddress;

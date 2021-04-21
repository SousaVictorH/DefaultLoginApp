import * as yup from 'yup';
import moment from 'moment';

import {
  INCORRECT_NAME,
  INCORRECT_DATE_OF_BIRTH,
  INCORRECT_GENRE,
  FUTURE_DATE,
} from '../../../constants/errors';

const validateInformations = yup.object().shape({
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

export default validateInformations;

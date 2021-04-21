import * as yup from 'yup';

import { 
  EMAIL_MALFORMED,
} from '../../../constants/errors';

const recoverSchema = yup.object().shape({
    email: yup
    .string()
    .trim()
    .email(EMAIL_MALFORMED)
    .required(EMAIL_MALFORMED),
});

export default recoverSchema;

import * as yup from 'yup';

import { 
  ACCEPT_OUR_TERMS
} from '../../../constants/errors';

const validateTerms = yup.object().shape({
  confirmation: yup.boolean().required(ACCEPT_OUR_TERMS),
});

export default validateTerms;

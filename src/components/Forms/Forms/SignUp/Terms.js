import React from 'react';

import { 
    KeyboardAvoidingView, 
} from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Input from '../../../layouts/Inputs/InputTextGradient';
import Option from '../../../layouts/Option';

import { white } from '../../../../resources/colors';

import {
    ACCEPT_THE_TERMS
} from '../../../../constants/texts';

export default function SignUpInformations({
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    setFieldError,
    setFieldValue
}) {

    return(
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={() => setFieldValue('confirmation', !values.confirmation)}>
                <Option
                    selected={values.confirmation == true}
                    error={errors.confirmation}
                    label={ACCEPT_THE_TERMS}
                />
            </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
};

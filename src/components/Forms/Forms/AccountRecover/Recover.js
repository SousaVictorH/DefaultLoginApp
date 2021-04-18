import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Input from '../../../layouts/Inputs/InputTextGradient';

import {
    inputs
} from '../../../../resources/icons';

import { white } from '../../../../resources/colors';

import {
    TYPE_YOUR_EMAIL
} from '../../../../constants/texts';

export default function Login({
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
}) {
    return(
        <KeyboardAvoidingView>
            <Input
                backgroundColor={white}
                placeholder={TYPE_YOUR_EMAIL}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                touched={touched.email}
                error={errors.email}
                icon={inputs.EMAIL}
            />
      </KeyboardAvoidingView>
    );
};
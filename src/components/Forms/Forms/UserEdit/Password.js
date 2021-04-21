import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Input from '../../../layouts/Inputs/RoundedInput';

import {
    TYPE_YOUR_PASSWORD,
    CONFIRM_YOUR_PASSWORD,
    PASSWORD_FIELD,
    PASSWORD_CONFIRMATION_FIELD
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
                fieldName={PASSWORD_FIELD}
                placeholder={TYPE_YOUR_PASSWORD}
                secureTextEntry={true}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                touched={touched.password}
                error={errors.password}
            />
            <Input
                fieldName={PASSWORD_CONFIRMATION_FIELD}
                placeholder={CONFIRM_YOUR_PASSWORD}
                secureTextEntry={true}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
            />
        </KeyboardAvoidingView>
    );
};
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Input from '../../../layouts/Inputs/InputTextGradient';

import {
    inputs
} from '../../../../resources/icons';

import { white } from '../../../../resources/colors';

import {
    TYPE_YOUR_TOKEN,
    TYPE_YOUR_PASSWORD,
    CONFIRM_YOUR_PASSWORD,
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
                placeholder={TYPE_YOUR_TOKEN}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.token}
                onChangeText={handleChange('token')}
                onBlur={handleBlur('token')}
                touched={touched.token}
                error={errors.token}
                icon={inputs.KEY}
                errorStyle={{ marginLeft: 28 }}
            />
            <Input
                backgroundColor={white}
                placeholder={TYPE_YOUR_PASSWORD}
                secureTextEntry={true}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                touched={touched.password}
                error={errors.password}
                icon={inputs.PASSWORD}
                errorStyle={{ marginLeft: 28 }}
            />
            <Input
                backgroundColor={white}
                placeholder={CONFIRM_YOUR_PASSWORD}
                secureTextEntry={true}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
                icon={inputs.PASSWORD}
                errorStyle={{ marginLeft: 28 }}
            />
      </KeyboardAvoidingView>
    );
};
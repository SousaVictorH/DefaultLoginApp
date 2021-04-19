import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Input from '../../../layouts/Inputs/InputTextGradient';

import { white } from '../../../../resources/colors';

import {
    TYPE_YOUR_EMAIL,
    TYPE_YOUR_PASSWORD
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
                errorStyle={{ marginLeft: 28 }}
            />
      </KeyboardAvoidingView>
    );
};
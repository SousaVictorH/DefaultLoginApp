import React from 'react';

import { 
    KeyboardAvoidingView, 
} from 'react-native';

import Input from '../../../layouts/Inputs/InputTextGradient';

import { white } from '../../../../resources/colors';

import { maskPhone } from '../../../../resources/phone';

import {
    TYPE_YOUR_EMAIL,
    TYPE_YOUR_PASSWORD,
    TYPE_YOUR_PHONE,
    CONFIRM_YOUR_PASSWORD
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
            />
    
            <Input
                backgroundColor={white}
                placeholder={TYPE_YOUR_PHONE}
                autoCapitalize={'none'}
                value={values.phone}
                onChangeText={text => {
                    setFieldValue('phone', maskPhone(text));
                }}
                onBlur={handleBlur('phone')}
                touched={touched.phone}
                error={errors.phone}
            />
      </KeyboardAvoidingView>
    );
};

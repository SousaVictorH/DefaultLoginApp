import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../../layouts/Inputs/RoundedInput';

import {
    heather
} from '../../../../resources/colors';

import { maskPhone } from '../../../../resources/phone';

import {
    TYPE_YOUR_EMAIL,
    TYPE_YOUR_PASSWORD,
    TYPE_YOUR_PHONE,
    CONFIRM_YOUR_PASSWORD,
    EMAIL_FIELD,
    PASSWORD_FIELD,
    PASSWORD_CONFIRMATION_FIELD,
    PHONE_FIELD
} from '../../../../constants/texts';

const SignUpInformations = ({
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    setFieldError,
    setFieldValue
}) => {
    const [seePassword, setSeePassword] = useState(true);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(true);  

    return(
        <KeyboardAvoidingView>
            <Input
                fieldName={PHONE_FIELD}
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

            <Input
                fieldName={EMAIL_FIELD}
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
                fieldName={PASSWORD_FIELD}
                placeholder={TYPE_YOUR_PASSWORD}
                isSecured={seePassword}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                touched={touched.password}
                error={errors.password}
                icon={
                    <Icon
                        name={seePassword ? 'eye' : 'eye-off'}
                        color={heather}
                        size={25}
                        onPress={() => setSeePassword(!seePassword)}
                    />
                }
            />

            <Input
                fieldName={PASSWORD_CONFIRMATION_FIELD}
                placeholder={CONFIRM_YOUR_PASSWORD}
                isSecured={seeConfirmPassword}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
                icon={
                    <Icon
                        name={seeConfirmPassword ? 'eye' : 'eye-off'}
                        color={heather}
                        size={25}
                        onPress={() => setSeeConfirmPassword(!seeConfirmPassword)}
                    />
                }
            />
      </KeyboardAvoidingView>
    );
};

export default SignUpInformations;

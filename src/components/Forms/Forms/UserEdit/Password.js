import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../../layouts/Inputs/RoundedInput';

import {
    heather
} from '../../../../resources/colors';

import {
    TYPE_YOUR_PASSWORD,
    CONFIRM_YOUR_PASSWORD,
    PASSWORD_FIELD,
    PASSWORD_CONFIRMATION_FIELD
} from '../../../../constants/texts';

const Login = ({
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
}) => {
    const [seePassword, setSeePassword] = useState(true);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(true);  

    return(
        <KeyboardAvoidingView>
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

export default Login;

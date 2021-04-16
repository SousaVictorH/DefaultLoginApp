import React from 'react';

import { 
    KeyboardAvoidingView, 
} from 'react-native';

import Input from '../../../layouts/Inputs/RoundedInput';
import GenreInput from '../../../layouts/Inputs/InputGenre';

import { white } from '../../../../resources/colors';

import { maskDate } from '../../../../resources/date';

import {
    TYPE_YOUR_NAME,
    SELECT_YOUR_GENRE,
    TYPE_YOUR_BIRTH,
    NAME_FIELD,
    BIRTH_FIELD
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
                fieldName={NAME_FIELD}
                placeholder={TYPE_YOUR_NAME}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                touched={touched.name}
                error={errors.name}
            />
    
            <GenreInput 
                label={SELECT_YOUR_GENRE}
                errors={errors}
                setFieldValue={setFieldValue}
                value={values.genre}
            />

            <Input
                fieldName={BIRTH_FIELD}
                placeholder={TYPE_YOUR_BIRTH}
                value={values.dateOfBirth}
                onChangeText={text => {
                    setFieldValue('dateOfBirth', maskDate(text));
                }}
                onBlur={handleBlur('dateOfBirth')}
                touched={touched.dateOfBirth}
                error={errors.dateOfBirth}
            />
      </KeyboardAvoidingView>
    );
};

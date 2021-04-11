import React from 'react';


import { 
    KeyboardAvoidingView, 
} from 'react-native';

import Input from '../../layouts/Inputs/InputTextGradient';
import GenreInput from '../../layouts/Inputs/InputGenre';

import { white } from '../../../resources/colors';

import { maskCep } from '../../../resources/zipCode';
import { maskDate } from '../../../resources/date';
import { maskPhone } from '../../../resources/phone';

import viacep from '../../../services/zipcode';

import {
    TYPE_YOUR_NAME,
    SELECT_YOUR_GENRE,
    TYPE_YOUR_BIRTH,
    TYPE_YOUR_EMAIL,
    TYPE_YOUR_PASSWORD,
    TYPE_YOUR_PHONE,
    TYPE_YOUR_ZIP_CODE,
    TYPE_YOUR_CITY,
    TYPE_YOUR_UF,
    TYPE_YOUR_STREET,
    TYPE_YOUR_DISTRICT,
    TYPE_YOUR_NUMBER,
    TYPE_YOUR_COMPLEMENT
} from '../../../constants/texts';

export default function SignUp({
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    setFieldError,
    setFieldValue
}) {
    async function searchCep(zipCode) {
        if (zipCode.trim().length === 9) {
          let response = await viacep.get(`${zipCode}/json/`);
    
          if (response.data.erro) {
            setFieldError('zipCode', 'CEP inválido!');
          } else {
            const { bairro, localidade, logradouro, uf } = response.data;
    
            setFieldValue('district', bairro);
            setFieldValue('city', localidade);
            setFieldValue('street', logradouro);
            setFieldValue('uf', uf);
          }
        }
    }

    return(
        <KeyboardAvoidingView>
            <Input
                backgroundColor={white}
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
                backgroundColor={white}
                placeholder={TYPE_YOUR_BIRTH}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.dateOfBirth}
                onChangeText={text => {
                    setFieldValue('dateOfBirth', maskDate(text));
                }}
                onBlur={handleBlur('dateOfBirth')}
                touched={touched.dateOfBirth}
                error={errors.dateOfBirth}
            />
    
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
                backgroundColor={white}
                placeholder={TYPE_YOUR_ZIP_CODE}
                value={values.zipCode}
                onChangeText={text => {
                    searchCep(text);
                    setFieldValue('zipCode', maskCep(text));
                }}
                onBlur={() => {
                searchCep(values.zipCode);
                }}
                keyboardType="numeric"
                touched={touched.zipCode}
                error={errors.zipCode}
            />

            <Input
                backgroundColor={white}
                placeholder={TYPE_YOUR_CITY}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.city}
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                touched={touched.city}
                error={errors.city}
            />
    
            <Input
                backgroundColor={white}
                placeholder={TYPE_YOUR_UF}
                value={values.uf}
                onChangeText={handleChange('uf')}
                onBlur={handleBlur('uf')}
                touched={touched.uf}
                error={errors.uf}
            />

            <Input
                backgroundColor={white}
                placeholder={TYPE_YOUR_STREET}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.street}
                onChangeText={handleChange('street')}
                onBlur={handleBlur('street')}
                touched={touched.street}
                error={errors.street}
            />

            <Input
                backgroundColor={white}
                placeholder={TYPE_YOUR_DISTRICT}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.district}
                onChangeText={handleChange('district')}
                onBlur={handleBlur('district')}
                touched={touched.district}
                error={errors.district}
            />

            <Input
                backgroundColor={white}
                placeholder={TYPE_YOUR_NUMBER}
                allowFontScaling={true}
                value={values.number}
                onChangeText={handleChange('number')}
                onBlur={handleBlur('number')}
                touched={touched.number}
                error={errors.number}
            />

            <Input
                backgroundColor={white}
                placeholder={TYPE_YOUR_COMPLEMENT}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.complement}
                onChangeText={handleChange('complement')}
                onBlur={handleBlur('complement')}
                touched={touched.complement}
                error={errors.complement}
            />
      </KeyboardAvoidingView>
    );
};

import React from 'react';

import { 
    KeyboardAvoidingView,
    StyleSheet,
    View
} from 'react-native';

import Input from '../../../layouts/Inputs/InputTextGradient';

import { white, black } from '../../../../resources/colors';

import { maskCep } from '../../../../resources/zipCode';

import viacep from '../../../../services/zipcode';

import {
    TYPE_YOUR_ZIP_CODE,
    TYPE_YOUR_CITY,
    TYPE_YOUR_UF,
    TYPE_YOUR_STREET,
    TYPE_YOUR_DISTRICT,
    TYPE_YOUR_NUMBER,
    TYPE_YOUR_COMPLEMENT
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
            
            <View styles={styles.inLine}>
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
                    placeholder={TYPE_YOUR_COMPLEMENT}
                    autoCapitalize={'none'}
                    allowFontScaling={true}
                    value={values.complement}
                    onChangeText={handleChange('complement')}
                    onBlur={handleBlur('complement')}
                    touched={touched.complement}
                    error={errors.complement}
                />
            </View>
      </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    inLine: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: black,
    }
})

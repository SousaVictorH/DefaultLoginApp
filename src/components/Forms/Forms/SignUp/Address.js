import React, { useState } from 'react';

import { 
    KeyboardAvoidingView,
    StyleSheet,
    View,
    Modal
} from 'react-native';

import Input from '../../../layouts/Inputs/RoundedInput';
import Loading from '../../../layouts/Loading';

import { maskCep } from '../../../../resources/zipCode';

import viacep from '../../../../services/zipcode';

import {
    TYPE_YOUR_ZIP_CODE,
    TYPE_YOUR_CITY,
    TYPE_YOUR_UF,
    TYPE_YOUR_STREET,
    TYPE_YOUR_DISTRICT,
    TYPE_YOUR_NUMBER,
    TYPE_YOUR_COMPLEMENT,
    ZIP_CODE_FIELD,
    CITY_FIELD,
    STREET_FIELD,
    DISTRICT_FIELD,
    UF_FIELD,
    NUMBER_FIELD,
    COMPLEMENT_FIELD
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
    const [loading, setLoading] = useState(false);

    async function searchCep(zipCode) {
        setLoading(true);
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
        setLoading(false);
    }

    return(
        <KeyboardAvoidingView>

            <Modal animationType="fade" visible={loading} transparent>
                <View style={styles.modal}>
                    <Loading />
                </View>
            </Modal>

            <Input
                fieldName={ZIP_CODE_FIELD}
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
                fieldName={CITY_FIELD}
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
                fieldName={STREET_FIELD}
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
                fieldName={DISTRICT_FIELD}
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
                fieldName={COMPLEMENT_FIELD}
                placeholder={TYPE_YOUR_COMPLEMENT}
                autoCapitalize={'none'}
                allowFontScaling={true}
                value={values.complement}
                onChangeText={handleChange('complement')}
                onBlur={handleBlur('complement')}
                touched={touched.complement}
                error={errors.complement}
            />
            
            <View style={styles.inLine}>
                <Input
                    fieldName={UF_FIELD}
                    placeholder={TYPE_YOUR_UF}
                    value={values.uf}
                    onChangeText={handleChange('uf')}
                    onBlur={handleBlur('uf')}
                    touched={touched.uf}
                    error={errors.uf}
                    maxLength={2}
                    input50
                />
                <Input
                    fieldName={NUMBER_FIELD}
                    placeholder={TYPE_YOUR_NUMBER}
                    value={values.number}
                    onChangeText={handleChange('number')}
                    onBlur={handleBlur('number')}
                    touched={touched.number}
                    error={errors.number}
                    input50
                    keyboardType="numeric"
                />
            </View>
      </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    inLine: {
        marginVertical: 10,
        marginHorizontal: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
})

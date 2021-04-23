import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import GradientButton from '../../../buttons/GradientButton';
import validations from '../../../../resources/validations/SignUp/addressSchema';

import Material from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
    ADVANCE,
    RESIDENTIAL_DATA
} from '../../../../constants/texts';

import {
    weightBlue,
    white
} from '../../../../resources/colors';

import SignUpAddress from '../../Forms/SignUp/Address';

const FormLogin = ({ handleSignUp }) => {

    return(
        <View>
            <Formik 
                initialValues={{
                    zipCode: '',
                    city: '',
                    uf: '',
                    street: '',
                    district: '',
                    number: '',
                    complement: '',
                }}
                validationSchema={validations}
                onSubmit={values => {
                    handleSignUp(values);
                }}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    touched,
                    errors,
                    setFieldError,
                    setFieldValue,
                    isValid
                }) => (
                <View style={styles.container}>

                    <Text style={styles.title}>{RESIDENTIAL_DATA}</Text>
                    
                    <SignUpAddress
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        setFieldError={setFieldError}
                        setFieldValue={setFieldValue}
                    />

                    <View style={styles.button}>
                        <GradientButton
                            text={ADVANCE}
                            icon={<Material name="chevron-right" size={26} color={white} />}
                            onPress={handleSubmit}
                            disable={!isValid}
                        />
                    </View>
                </View>
                )}
            </Formik>
        </View>
    );
};

export default FormLogin;

const styles = StyleSheet.create({
    container: {
        width: 350,
        marginVertical: 30,
    },
    title: {
        fontSize: 22,
        marginBottom: 28,
        textAlign: 'center',
        color: weightBlue,
    },
    button: {
        marginTop: 10
    },
});
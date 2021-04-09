import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Formik } from 'formik';

import Button from '../../buttons/ButtonGradient';
import validations from '../../../resources/validations/signUpSchema';

import { SUBMIT } from '../../../constants/texts';

import SignUp from '../Forms/SignUp';

const FormLogin = ({ handleSignUp }) => {
    return(
        <View>
            <Formik 
                initialValues={{
                    name: '',
                    genre: '',
                    dateOfBirth: '',
                    email: '',
                    password: '',
                    phone: '',
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
                    setFieldValue
                }) => (
                <View>
                    <SignUp
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        setFieldError={setFieldError}
                        setFieldValue={setFieldValue}
                    />

                    <View style={styles.button}>
                        <Button onPress={handleSubmit} title={SUBMIT} />
                    </View>
                </View>
                )}
            </Formik>
        </View>
    );
};

export default FormLogin;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    }
});
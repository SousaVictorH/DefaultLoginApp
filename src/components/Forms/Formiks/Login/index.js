import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Formik } from 'formik';

import Button from '../../../buttons/ButtonGradient';
import validations from '../../../../resources/validations/Login/loginSchema';

import ShowMessageError from '../../../layouts/Inputs/components/ShowMessageError';

import { LOGIN_MAFORMED } from '../../../../constants/errors';

import { ENTER } from '../../../../constants/texts';

import Login from '../../Forms/Login';

const FormLogin = ({ handleLogin, error }) => {
    return(
        <View>
            <Formik 
                initialValues={{ email: '', password: ''}}
                validationSchema={validations}
                onSubmit={values => {
                    handleLogin(values.email, values.password);
                }}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    touched,
                    errors,
                }) => (
                <View>
                    <Login
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                    />

                    {error && <ShowMessageError error={LOGIN_MAFORMED} />}

                    <View style={styles.button}>
                        <Button 
                            onPress={handleSubmit} 
                            title={ENTER} 
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
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    }
});
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import Button from '../../../buttons/ButtonGradient';
import validations from '../../../../resources/validations/SignUp/termsSchema';

import {
    SUBMIT,
    USE_TEMRS
} from '../../../../constants/texts';

import ShowMessageError from '../../../layouts/Inputs/components/ShowMessageError';

import { LOGIN_MAFORMED } from '../../../../constants/errors';

import {
    weightBlue
} from '../../../../resources/colors';

import SignUpTerms from '../../Forms/SignUp/Terms';

const FormLogin = ({ handleSignUp, error, errorMessage }) => {
    return(
        <View>
            <Formik 
                initialValues={{
                    confirmation: false,
                }}
                validationSchema={validations}
                onSubmit={values => {
                    values.confirmation && handleSignUp(values);
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
                }) => (
                <View style={styles.container}>

                    <Text style={styles.title}>{USE_TEMRS}</Text>

                    <SignUpTerms
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
                        setFieldError={setFieldError}
                        setFieldValue={setFieldValue}
                    />

                    {error && <ShowMessageError error={errorMessage} style={styles.error} />}

                    <View style={styles.button}>
                        <Button
                            onPress={handleSubmit}
                            title={SUBMIT}
                            enabled={values.confirmation}
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
        minWidth: 400,
        marginVertical: 50,
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 22,
        marginBottom: 15,
        textAlign: 'center',
        color: weightBlue,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    },
    error: {
        marginLeft: 35,
    }
});
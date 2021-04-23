import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import Button from '../../../buttons/ButtonGradient';
import validations from '../../../../resources/validations/SignUp/termsSchema';

import {
    SUBMIT,
    USE_TEMRS
} from '../../../../constants/texts';

import {
    weightBlue
} from '../../../../resources/colors';

import SignUpTerms from '../../Forms/SignUp/Terms';

const FormLogin = ({ handleSignUp }) => {
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
        width: 350,
        marginVertical: 50,
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
    }
});
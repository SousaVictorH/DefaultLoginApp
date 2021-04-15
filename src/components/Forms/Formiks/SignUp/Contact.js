import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import Button from '../../../buttons/ButtonGradient';
import { validateContact as validations } from '../../../../resources/validations/signUpSchema';

import { objIsEmpty } from '../../../../utils/object';

import { 
    ADVANCE,
    CONTACT_DATA
} from '../../../../constants/texts';

import {
    weightBlue
} from '../../../../resources/colors';

import SignUpContact from '../../Forms/SignUp/Contact';


const FormLogin = ({ handleSignUp }) => {
    return(
        <View>
            <Formik 
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    phone: '',
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
                }) => (
                <View style={styles.container}>

                    <Text style={styles.title}>{CONTACT_DATA}</Text>

                    <SignUpContact
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
                            title={ADVANCE} 
                            enabled={objIsEmpty(errors)}
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
        width: 300,
        marginTop: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 32,
        textAlign: 'center',
        color: weightBlue,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    }
});
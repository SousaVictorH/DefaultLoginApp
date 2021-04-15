import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import Button from '../../../buttons/ButtonGradient';
import { validateInformations as validations } from '../../../../resources/validations/signUpSchema';

import { objIsEmpty } from '../../../../utils/object';

import {
    weightBlue
} from '../../../../resources/colors';

import { 
    ADVANCE,
    PERSONAL_DATA
} from '../../../../constants/texts';

import SignUpInformations from '../../Forms/SignUp/Informations';

const FormLogin = ({ handleSignUp }) => {
    return(
        <View>
            <Formik 
                initialValues={{
                    name: '',
                    genre: '',
                    dateOfBirth: '',
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

                    <Text style={styles.title}>{PERSONAL_DATA}</Text>

                    <SignUpInformations
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
        marginTop: 30,
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
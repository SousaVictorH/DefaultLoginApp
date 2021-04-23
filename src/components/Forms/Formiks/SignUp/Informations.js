import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import GradientButton from '../../../buttons/GradientButton';
import validations from '../../../../resources/validations/SignUp/informationSchema';

import Material from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    weightBlue,
    white
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
                    isValid
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
    }
});
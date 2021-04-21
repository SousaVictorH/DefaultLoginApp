import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import validations from '../../../../resources/validations/Update/updateInformationSchema';

import {
    weightBlue,
} from '../../../../resources/colors';

import { 
    SUBMIT,
    EDIT_USER_TEXT
} from '../../../../constants/texts';

import Button from '../../../buttons/ButtonGradient';
import Form from '../../Forms/UserEdit/Information';

const RecoverForm = ({ requestUpdate, auth }) => {

    const {
        name,
        genre,
        dateOfBirth,
        email,
        phone
    } = auth.data;

    return(
        <View>
            <Formik 
                initialValues={{
                    name,
                    genre,
                    dateOfBirth,
                    email,
                    phone
                }}
                validationSchema={validations}
                onSubmit={values => {
                    requestUpdate(values);
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
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{EDIT_USER_TEXT}</Text>
                    </View>

                    <Form
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
                        />
                    </View>
                </View>
                )}
            </Formik>
        </View>
    );
};

export default RecoverForm;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        width: '80%',
        alignSelf: 'center',
        marginVertical: 15,
    },
    header: {
        marginVertical: 30,
    },
    title: {
        color: weightBlue,
        fontSize: 21,
        fontWeight: '500',
        textAlign: 'center',
        marginRight: 5,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    }
});
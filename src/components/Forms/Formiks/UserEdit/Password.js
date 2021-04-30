import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Formik } from 'formik';

import validations from '../../../../resources/validations/Update/updatePasswordSchema';

import {
    weightBlue,
} from '../../../../resources/colors';

import { 
    SUBMIT,
    CHANGE_YOUR_PASSWORD
} from '../../../../constants/texts';

import Button from '../../../buttons/ButtonGradient';
import Form from '../../Forms/UserEdit/Password';

const RecoverForm = ({ requestUpdate }) => {
    return(
        <View>
            <Formik 
                initialValues={{ password: '', confirmPassword: '' }}
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
                }) => (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{CHANGE_YOUR_PASSWORD}</Text>
                    </View>

                    <Form
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched}
                        errors={errors}
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
        marginTop: 130,
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
import React from 'react';

import { 
    KeyboardAvoidingView,
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Option from '../../../layouts/Option';

import {
    SINGUP_USE_TERMS as term
} from '../../../../constants/texts';

import { darkGray } from '../../../../resources/colors';

import {
    ACCEPT_THE_TERMS
} from '../../../../constants/texts';

export default function SignUpInformations({
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    setFieldError,
    setFieldValue
}) {

    return(
        <KeyboardAvoidingView>
            <View style={styles.box}>
                <ScrollView style={styles.termsBox}>
                    <Text style={styles.terms}>{term}</Text>
                </ScrollView>
            </View>

            <TouchableWithoutFeedback onPress={() => setFieldValue('confirmation', !values.confirmation)}>
                <Option
                    selected={values.confirmation == true}
                    error={errors.confirmation}
                    label={ACCEPT_THE_TERMS}
                />
            </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    box: {
      maxHeight: 250,
      paddingHorizontal: 5,
      marginTop: 20,
      marginBottom: 15,
    },
    termsBox: {
      marginVertical: 12,
    },
    terms: {
      textAlign: 'justify',
      fontFamily: 'Product Sans Regular',
      color: darkGray,
      fontSize: 15,
    },
  });

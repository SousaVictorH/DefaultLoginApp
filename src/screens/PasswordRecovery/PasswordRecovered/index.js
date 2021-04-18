import React from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import BarBoxGradient from '../../../components/boxes/BorderRadiusGradient';
import FormLayout from '../../../components/layouts/FormLayout';

import { black } from '../../../resources/colors';

const PasswordRecover = ({ navigation }) => {

    const renderForm = () => (
        <Text>RECOVERED</Text>
    );
  
      const renderContent = () => (
        <View style={styles.container}>
  
            <FormLayout 
                content={renderForm()}
                scroll
                navigation={navigation}
            />
  
        </View>
    );
  
      return (
          <BarBoxGradient content={renderContent()} scroll={true} />
      )
};

export default PasswordRecover;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        minWidth: '100%',
    }
});

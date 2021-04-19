import React from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    RECOVERED,
    GO_TO_LOGIN
} from '../../../constants/texts';

import { LOGIN_SCREEN } from '../../../constants/screens';

import { goToScreen } from '../../../interfaces/navigations';

import { icons } from '../../../resources/icons';

import { lightDarkBlue } from '../../../resources/colors';

import Logo from '../../../components/layouts/Logo';
import ImageIcon from '../../../components/icons/ImageIcon';
import Button from '../../../components/buttons/ButtonGradient';

import BarBoxGradient from '../../../components/boxes/BorderRadiusGradient';
import FormLayout from '../../../components/layouts/FormLayout';

const PasswordRecover = ({ navigation }) => {
    const goTOLogin = () => {
        goToScreen(navigation, LOGIN_SCREEN);
    };
  
    const renderContent = () => (
        <View style={styles.container}>
            <Logo />

            <Text style={styles.title}>{RECOVERED}</Text>

            <View style={styles.iconContainer}>
                <ImageIcon 
                    icon={icons.OK.path}
                />
            </View>

            <View style={styles.button}>
                <Button 
                    onPress={goTOLogin} 
                    title={GO_TO_LOGIN} 
                />
            </View>
        </View>
    );
  
    return (
        <BarBoxGradient>
          <FormLayout content={renderContent()} hideHeader />
        </BarBoxGradient>
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
    },
    title: {
        color: lightDarkBlue,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 15,
    },
    iconContainer: {
        height: 120,
        width: 120,
        marginTop: 20,
        marginBottom: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    }
});

import React from 'react';

import {
    Text
} from 'react-native';

import ScreenLayout from '../../../components/layouts/ScreenLayout';

const PasswordSwitch = ({ navigation }) => {
    const renderScreen = () => (
        <Text>PASS SWITCH</Text>
    );

    return(
        <ScreenLayout 
            content={renderScreen()}
            navigation={navigation}
        />
    );
};

export default PasswordSwitch;

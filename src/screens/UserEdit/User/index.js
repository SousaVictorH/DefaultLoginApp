import React from 'react';

import {
    Text
} from 'react-native';

import ScreenLayout from '../../../components/layouts/ScreenLayout';

const DataSwitch = ({ navigation }) => {
    const renderScreen = () => (
        <Text>DATA SWITCH</Text>
    );

    return(
        <ScreenLayout 
            content={renderScreen()}
            navigation={navigation}
        />
    );
};

export default DataSwitch;

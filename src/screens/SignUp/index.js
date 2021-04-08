import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import ScreenLayout from '../../components/layouts/ScreenLayout/ScreenLayout';

import { goToScreen } from '../../interfaces/navigations';

export default function SignUp({ navigation }) {

    const renderContent = () => (
        <View>
            <Text>
                SignUp
            </Text>
        </View>
    );

    return (
        <ScreenLayout content={renderContent()} scroll={true} />
    )
};
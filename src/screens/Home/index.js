import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useSelector } from 'react-redux';

import { black } from '../../resources/colors';

import ScreenLayout from '../../components/layouts/ScreenLayout';

export default function Home({ navigation }) {
    // AUTH
    const auth = useSelector(state => state.auth);

    console.log(auth.data);

    const renderContent = () => (
        <View style={styles.container}>
            <Text style={styles.title}>
                {`Hello, ${auth.data?.name}!`}
            </Text>
        </View>
    );

    return (
        <ScreenLayout 
            content={renderContent()} 
            navigation={navigation}
            hideBackButton
        />
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 250,
    },
    title: {
        color: black,
        fontSize: 28,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 25,
    }
});
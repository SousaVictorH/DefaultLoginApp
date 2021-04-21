import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import { useSelector } from 'react-redux';

import ScreenLayout from '../../components/layouts/ScreenLayout';

import Header from './components/Header';
import Content from './components/Content';

const Profile = ({ navigation }) => {
    const auth = useSelector(state => state.auth);

    const name = auth.data?.name;
    const avatar = auth.data?.avatar;
    
    const renderScreen = () => (
        <View style={styles.container}>
            <Header name={name} avatar={avatar} />
            <Content navigation={navigation}/>
        </View>
    );

    return(
        <ScreenLayout 
            content={renderScreen()}
            navigation={navigation}
            hideBackButton={false}
        />
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
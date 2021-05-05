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
    
    const renderScreen = () => {

        return(
            <View style={styles.container}>
                <Header auth={auth} navigation={navigation} />
                <Content navigation={navigation}/>
            </View>
        );
}   ;

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
    loading: {
        marginTop: 240,
    }
});
import React, { useState } from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import { useSelector } from 'react-redux';

import ScreenLayout from '../../components/layouts/ScreenLayout';

import Header from './components/Header';
import Content from './components/Content';

import Loading from '../../components/layouts/Loading';

const Profile = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const auth = useSelector(state => state.auth);
    
    const renderScreen = () => {

        if (loading) {
            return (
              <View style={styles.loading}>
                <Loading />
              </View>
            );
        }

        return(
            <View style={styles.container}>
                <Header auth={auth} setLoading={setLoading} navigation={navigation} />
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
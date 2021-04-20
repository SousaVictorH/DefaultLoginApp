import React from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import globalStyles from '../../../components/styles/globalStyles';

import { socialNetwork } from '../../../resources/icons';

import IconButton from '../../../components/buttons/IconButton';
import Avatar from '../../../components/layouts/Avatar';

const Header = ({ name, avatar }) => {
    const AddPhoto = () => {
        console.log('AddPhoto!');
    };

    return(
        <View style={styles.container}>
            <IconButton 
                style={styles.photo}
                action={AddPhoto}
                icon={socialNetwork.PHOTO.path}
            />

            <Avatar uri={avatar} />

            <View style={styles.profileContainer}>
                <Text style={globalStyles.title}>{name}</Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 40,
    },
    photo: {
        position: 'absolute',
        top: 10,
        left: '59%',
        height: 30,
        width: 50,
        zIndex: 2,
    },
    profileContainer: {
        alignSelf: 'center',
        maxWidth: 250,
        width: '100%',
        marginTop: 26,
    }
});
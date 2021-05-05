import React, { useEffect, useState } from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import {
    PROFILE_SCREEN
} from '../../../constants/screens';

import * as ImagePicker from 'react-native-image-picker';

import { useDispatch } from 'react-redux';
import * as ReduxActions from '../../../store/actions/auth';

import globalStyles from '../../../components/styles/globalStyles';

import { requestAvatarUpdate } from '../../../interfaces/api';

import { heather } from '../../../resources/colors';
import { socialNetwork } from '../../../resources/icons';

import IconButton from '../../../components/buttons/IconButton';
import Avatar from '../../../components/layouts/Avatar';

import ErrorModal from '../../../components/modals/Error';
import LoginModal from '../../../components/modals/Login';
import LoadingModal from '../../../components/modals/Loading';

const actionDispatch = (dispatch) => ({
    updateState: (data) => dispatch(ReduxActions.updateState(data))
});

const Header = ({ auth, navigation }) => {
    const [file, setFile] = useState({
        fileName: '',
        uri: '',
        type: '',
    });

    const [loading, setLoading] = useState(false);

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const { name, avatar, token, id } = auth.data;

    // UPDATE 
    const { updateState } = actionDispatch(useDispatch());

    const AddPhoto = () => {
        ImagePicker.launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
        }, (response) => {
            
            if (response.didCancel || response.error || !response.uri) return;

            setFile({
                fileName: response.fileName,
                uri: response.uri,
                type: response.type,
            });
        })
    };

    useEffect(() => {
        const uploadImage = async () => {
            setLoading(true);
            try {
                file.id = id;
                file.token = token;

                const response = await requestAvatarUpdate(file);

                if (response.error) {
                    throw response.error;
                }
    
                const values = { avatar: file.uri }
                const obj = Object.assign({}, auth.data, values );
    
                updateState(obj);
                
            } catch (error) {              
                const statusCode = error.toJSON().message.split(' ')[5];
    
                if (statusCode === '401' || statusCode === '500') {
                    setShowLoginModal(true);
                } else {
                    setShowErrorModal(true);
                }
            }
            setLoading(false);
        };

        if (file.uri && file.uri != avatar) {
            uploadImage();
        }
    }, [file.uri])

    return(
        <View style={styles.container}>
            <ErrorModal isVisible={showErrorModal} setIsVisible={setShowErrorModal} />

            <LoginModal
                isVisible={showLoginModal}
                setIsVisible={setShowLoginModal}
                navigation={navigation}
                screen={PROFILE_SCREEN}
            />

            <LoadingModal isVisible={loading} />

            <IconButton 
                style={styles.photo}
                action={AddPhoto}
                icon={socialNetwork.PHOTO.path}
            />

            <Avatar uri={avatar} />

            <View style={styles.profileContainer}>
                <Text style={[globalStyles.title, styles.title]}>{name}</Text>
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
    },
    title: {
        width: 180,
        alignSelf: 'center',
    }
});
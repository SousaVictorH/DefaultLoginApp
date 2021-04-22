import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';

import { useSelector, useDispatch } from 'react-redux';
import * as ReduxActions from '../../../store/actions/auth';

import globalStyles from '../../../components/styles/globalStyles';

import { socialNetwork } from '../../../resources/icons';

import IconButton from '../../../components/buttons/IconButton';
import Avatar from '../../../components/layouts/Avatar';

const actionDispatch = (dispatch) => ({
    updateState: (data) => dispatch(ReduxActions.updateState(data))
});


const Header = ({ name, avatar, setLoading }) => {
    const [file, setFile] = useState({
        fileName: '',
        uri: '',
        type: '',
    });
    
    // AUTH
    const auth = useSelector(state => state.auth);

    // UPDATE 
    const { updateState } = actionDispatch(useDispatch());

    const AddPhoto = () => {
        ImagePicker.launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
        }, (response) => {
            
            if (response.didCancel) {
                alert('Cancel')
                return;
            }
            if (response.error) {
                alert('Error')
                return;
            }
            if (!response.uri) {
                alert('No uri')
                return;
            }

            setFile({
                fileName: response.fileName,
                uri: response.uri,
                type: response.type,
            });
        })
    };

    const uploadImage = async () => {
        setLoading(true);
        try {
            console.log(file);

            if (false) {
                // verify error
            } else {
                const values = { avatar: file.uri }

                const obj = Object.assign({}, auth.data, values );

                updateState(obj);
            }
        } catch (error) {
            alert('Error');
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (file.uri) {
            uploadImage(file);
        }
    }, [file.uri])

    return(
        <View style={styles.container}>
            <IconButton 
                style={styles.photo}
                action={AddPhoto}
                icon={socialNetwork.PHOTO.path}
            />

            <Avatar uri={file.uri || avatar} />

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
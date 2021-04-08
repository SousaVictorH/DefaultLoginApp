import { Linking } from 'react-native';

export const goBack = (navigation, level = 1) => {
    return navigation.goBack();
};

export const goToScreen = (navigation, screen, params = undefined) => {
    return navigation.navigate(screen, params);
};

export const goToTopOfStack = navigation => {
    return navigation.popToTop();
};

export const openURI = async (uri, alternative) => {
    try {
        const canOpenURL = await Linking.canOpenURL(uri);

        if (canOpenURL) {
          await Linking.openURL(uri);
        }

        await Linking.openURL(alternative);
    } catch (error) {
        console.warn(error);
    }
};

export const openURL = async uri => {
    return await Linking.openURL(uri);
};

export const canOpenURL = async uri => {
    try {
        return await Linking.canOpenURL(uri);
    } catch (error) {
        return false;
    }
};

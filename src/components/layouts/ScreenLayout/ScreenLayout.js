import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import BarBox from '../../boxes/BarBox';

import Loading from '../Loading';

import { darkBlue, white } from '../../../resources/colors';

import {
  IOS_HEADER_HEIGHT,
  ANDROID_HEADER_HEIGHT,
} from '../../styles/constants';

import Header from './HeaderTemplate';
import Footer from './FooterTemplate';

const ScreenLayout = ({
  content,
  scroll,
  hideHeader,
  hideFooter,
  loading,
}) => {
  const body = () => {
    if (scroll) {
      return <ScrollView>{content}</ScrollView>;
    }
    return content;
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={darkBlue} barStyle="light-content" />

      {Platform.OS === 'ios' && (
        <View style={{ height: 50 }}>
          <BarBox />
        </View>
      )}

      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.headerContainer, { display: hideHeader ? 'none' : 'flex'}]}>
          <Header hideHeader={hideHeader} />
        </View>

        <View style={styles.container}>
          {loading ? <Loading /> : body()}
        </View>
      </SafeAreaView>
      
      <View style={[styles.footerContainer, { display: hideFooter ? 'none' : 'flex'}]}>
        <Footer hideFooter={hideFooter} />
      </View>
    </View>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },

  headerContainer: {
    flex: 1,
    maxHeight:
      Platform.OS === 'ios' ? IOS_HEADER_HEIGHT : ANDROID_HEADER_HEIGHT,
  },

  header: {
    flexDirection: 'row',
  },

  footerContainer: {
    flex: 1,
    maxHeight: 80,
  },
});

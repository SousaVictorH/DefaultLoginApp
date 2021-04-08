/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {
     StatusBar,
 } from 'react-native';
 
 import { STATUS_BAR } from './resources/colors';
 
 import { NavigationContainer } from '@react-navigation/native'
 
 import { Provider } from 'react-redux';
 
 import { store } from './store';
 
 import Routes from './routes/routes';
 
 const App = () => {
     return (
         <>
             <StatusBar backgroundColor={STATUS_BAR} />
             <NavigationContainer>
                 <Provider store={store}>
                     <Routes />
                 </Provider>
             </NavigationContainer>
         </>
     );
 };
 
 export default App;
 
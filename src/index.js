 import React from 'react';

 import {
     StatusBar,
 } from 'react-native';
 
 import { STATUS_BAR } from './resources/colors';
 
 import { NavigationContainer } from '@react-navigation/native'
 
 import { Provider } from 'react-redux';
 import { PersistGate } from 'redux-persist/integration/react';
 
 import { store, persistor } from './store';
 
 import Routes from './routes/routes';
 
 const App = () => {
     return (
         <>
             <StatusBar backgroundColor={STATUS_BAR} />
             <NavigationContainer>
                 <Provider store={store}>
                    <PersistGate loading={false} persistor={persistor} >
                        <Routes />
                    </PersistGate>
                 </Provider>
             </NavigationContainer>
         </>
     );
 };
 
 export default App;
 
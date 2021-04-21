import { createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

import combinedReducers from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['navigation'] // navigation will not be persisted
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

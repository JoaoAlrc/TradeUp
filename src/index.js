import React from 'react';
import AppNavigator from './services/routes';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import store from './services/store'

const App = () => (
    <Provider store={store}>
        <StatusBar backgroundColor="#008dff" barStyle="light-content" />
        <AppNavigator />
    </Provider>
)

export default App;
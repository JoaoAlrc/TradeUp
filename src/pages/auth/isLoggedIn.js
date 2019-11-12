import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

function IsLoggedIn(props) {
    useEffect(() => {
        async function UserIsLogged() {
            const userToken = await AsyncStorage.getItem('@TradeUp:token');
            props.navigation.navigate(userToken ? 'App' : 'Auth');
        }
        UserIsLogged();
    }, [])

    return (
        <ActivityIndicator size="large" color="#008dff" />
    );
}

export default IsLoggedIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})
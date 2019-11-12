import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
// import signIn from '../../services/api'

function IsLoggedIn(props) {
    useEffect(() => {
        async function UserIsLogged() {
            const userToken = await AsyncStorage.getItem('@TradeUp:token');
            props.navigation.navigate(userToken ? 'App' : 'Auth');
        }
        UserIsLogged();
    }, [])

    return (
        <View>
            <ActivityIndicator size="large" color="#1c64ff" />
        </View>
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
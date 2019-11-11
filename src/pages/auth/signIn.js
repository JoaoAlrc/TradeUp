import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
// import signIn from '../../services/api'

function SignInScreen() {
    const [errorMessage, setErrorMessage] = useState('')

    function login() {
        // signIn().then(res => console.warn('s', res))
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{errorMessage}</Text>
            <Button title="btn" onPress={login} />
        </View>
    );
}

export default SignInScreen;
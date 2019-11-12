import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, ActivityIndicator } from 'react-native';
import { AuthAPI } from '../../services/api';
import { withNavigation } from 'react-navigation';
import {
    Container,
    Logo,
    Input,
    ErrorMessage,
    Button,
    ButtonText,
    SignUpLink,
    SignUpLinkText,
} from '../../components/styles'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-community/async-storage';

const setToken = async (props) => {
}

const SignIn = (props) => (
    <Container>
        <Logo source={require('../../images/logo.png')} resizeMode="contain" logoHeight={"30%"} logoMgBtm={"40px"} />
        <Input
            placeholder="E-mail"
            placeholderTextColor="#595959"
            value={props.values.email}
            onChangeText={text => props.setFieldValue('email', text)}
            autoCapitalize="none"
            autoCorrect={false}
        />
        {props.touched.email
            && props.errors.email
            && <ErrorMessage>{props.errors.email}</ErrorMessage>}
        <Input
            placeholder="Senha"
            placeholderTextColor="#595959"
            value={props.values.password}
            onChangeText={text => props.setFieldValue('password', text)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
        />
        {props.touched.password
            && props.errors.password
            && <ErrorMessage>{props.errors.password}</ErrorMessage>}
        <Button onPress={props.handleSubmit}>
            <ButtonText>Entrar</ButtonText>
        </Button>
        <SignUpLink
        //  onPress={handleCreateAccountPress}
        >
            <SignUpLinkText>Criar conta.</SignUpLinkText>
        </SignUpLink>
        {props.errors.message && <ErrorMessage>{props.errors.message}</ErrorMessage>}
        {props.isSubmitting && <ActivityIndicator />}
    </Container>
);

SignIn.navigationOptions = {
    header: null,
}

export default withNavigation(withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Digite um e-mail válido')
            .required('Preencha o campo de e-mail'),
        password: Yup.string()
            .min(6, 'A senha deve ter no mínimo 6 caracteres')
            .required('Preencha o campo de senha'),
    }),

    handleSubmit: (values, { setSubmitting, setErrors, ...props }) => {
        AuthAPI.login(values).then(async res => {
            if (res.token) {
                await AsyncStorage.setItem('@TradeUp:token', res.token)
                props.props.navigation.navigate('App');
            } else {
                setSubmitting(false);
                setErrors({ message: "Verifique suas credenciais" });
            }
        })
            .catch(err => {
                setSubmitting(false);
                setErrors({ message: err.message });
            });
    }
})(SignIn));
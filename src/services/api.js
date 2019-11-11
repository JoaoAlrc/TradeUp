import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';

const api = create({
    baseURL: 'https://reqres.in/',
});

api.addAsyncRequestTransform(request => async () => {
    const token = await AsyncStorage.getItem('@TradeUp:token');

    if (token) request.headers.Authorization = `Bearer ${token}`;
});

api.addResponseTransform(response => {
    if (!response.ok) throw response;
})

const returnResponse = (response) => {
    return new Promise((resolve, reject) => {
        if (response.status >= 400 && response.status < 600) {
            switch (response.status) {
                case 400:
                    return reject("Usuário não encontrado, por favor verifique suas credenciais");
                case 403:
                    return reject("Não autorizado");
                case 404:
                    return reject("Página não encontrada");
                case 422:
                    return reject("Requisição incorreta");
                default:
                    if (response.data != undefined && response.data != '') reject(response.data);
                    reject("Erro no servidor");
            }
        }
        else {
            return resolve(response.data)
        }
    })
}

export const AuthAPI = {
    login: async (email, password) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            const body = {
                "email": email,
                "password": password
            }
            const response = await api.post('/api/login', body, config).then(returnResponse)
            return response
        } catch (error) {
            return error
        }
    },
}

export const UsersAPI = {
    ListUsers: async (page) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            const response = await api.get(`api/users?page=${page}`, config).then(returnResponse)
            return response
        } catch (error) {
            return error
        }
    },
    UserDetail: async (user_id) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            const response = await api.get(`/api/users/${user_id}`, config).then(returnResponse)
            return response
        } catch (error) {
            return error
        }
    }
};
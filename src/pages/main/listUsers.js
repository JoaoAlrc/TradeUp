import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, ActivityIndicator, FlatList, StyleSheet, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { useDispatch } from 'react-redux'
import { UsersAPI } from '../../services/api'
import { ItemList } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListNavOptions } from './NavOptions'
import AsyncStorage from '@react-native-community/async-storage';

function ListUsers(props) {
    const [listUsers, setListUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const getListUsers = async (page) => {
        try {
            const response = await UsersAPI.ListUsers(page).then(res => res);
            return response.data
        } catch (error) {

        }
    }

    useEffect(() => {
        loadRepositories();
    }, [])

    const loadRepositories = async () => {
        if (loading) return;
        setLoading(true)

        const response = await getListUsers(page);

        setListUsers([...listUsers, ...response])
        setPage(page + 1)
        setLoading(false)
    }

    const onPressListItem = (id) => {
        props.navigation.navigate('App', {}, NavigationActions.navigate({ routeName: 'UserDetail' }))
        UsersAPI.UserDetail(id).then(res => {
            dispatch({ type: 'CHANGE_USER', user: res.data })
        })
    };

    const renderHeader = () => {
        return (
            <View>
                <Text style={styles.title}>Lista de Usuários</Text>
            </View>
        );
    };

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#008dff" />
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                contentContainerStyle={styles.list}
                data={listUsers}
                renderItem={(data) => {
                    return (
                        <ItemList data={data.item} onPress={onPressListItem} />
                    )
                }}
                keyExtractor={item => item.id}
                onEndReached={loadRepositories}
                onEndReachedThreshold={0.1}
                ListHeaderComponent={renderHeader}
                ListFooterComponent={renderFooter}
            />
        </View>
    );
}



ListUsers.navigationOptions = ListNavOptions

export default ListUsers;

const styles = StyleSheet.create({
    title: {
        color: '#008dff',
        marginLeft: 26,
        marginTop: 10,
        marginBottom: 'auto',
        fontWeight: 'bold',
        fontSize: 28,
        position: 'relative'
    },
    list: {
        paddingHorizontal: 10,
    },
});
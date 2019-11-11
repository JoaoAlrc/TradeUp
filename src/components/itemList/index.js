import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, FlatList, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemList = (props) => {

    const onPressItem = () => {
        props.onPress && props.onPress(props.data.id)
    }

    return (
        <TouchableOpacity onPress={onPressItem} style={styles.container}>
            <Image source={{ uri: props.data.avatar }} style={styles.photo} />
            <View style={styles.container_text}>
                <Text style={styles.name}>
                    {props.data.first_name}
                </Text>
                <Text style={styles.email}>
                    {props.data.email}
                </Text>
            </View>
            <Icon name="chevron-right" style={{ alignSelf: 'center' }} size={20} color="#008dff" />
        </TouchableOpacity>
    );
}

export default ItemList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 10,
    },
    name: {
        fontSize: 18,
        color: '#008dff',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    email: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#008dff',
    },
    photo: {
        height: 70,
        width: 70,
        borderRadius: 5
    },
});
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, FlatList, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FooterButton = (props) => {

    const onPressItem = (e) => {
        props.onPress && props.onPress(e)
    }

    return (
        <TouchableOpacity style={{ ...styles.button, ...props.style }} onPress={onPressItem}>
            <Text textStyle={{ ...styles.textButton, ...props.textButton }}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default FooterButton;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#EFEFEF",
        color: "#008dff",
    },
    textButton: {
        fontSize: 20,
    },
});
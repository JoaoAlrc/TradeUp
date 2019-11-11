import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListNavOptions = ({ navigation }) => ({
    headerTitle: (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{ height: 60, width: 60 }}
                source={require('../../images/logo.png')} />
        </View>
    ),
    headerStyle: {
        backgroundColor: '#008dff',
        height: 60
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        display: 'flex',
        justifyContent: 'center',
        height: 100
    },
    headerLeft: (<TouchableHighlight>
        <Icon name="bars" style={{ alignSelf: 'center', marginLeft: 15 }} size={25} onPress={() => navigation.openDrawer()} color="#fff" />
    </TouchableHighlight>),
    headerRight: <View></View>
});

const DetailNavOptions = ({ navigation }) => ({
    headerTitle: (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{ height: 60, width: 60 }}
                source={require('../../images/logo.png')} />
        </View>
    ),
    headerStyle: {
        backgroundColor: '#008dff',
        height: 60
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        display: 'flex',
        justifyContent: 'center',
        height: 100
    },
    headerRight: <View></View>
});

export { ListNavOptions, DetailNavOptions };
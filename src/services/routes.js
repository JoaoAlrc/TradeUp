import React, { useState, useEffect } from 'react';
import { Image, View, SafeAreaView, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
// import SafeAreaView from 'react-native-safe-area-view'
import api from './api'
import { SignInScreen, IsLoggedIn, ListUsers, UserDetail } from '../pages'
import AsyncStorage from '@react-native-community/async-storage';

const AuthNavigator = createStackNavigator({
    SignIn: {
        screen: SignInScreen,
    },
});

const MainNavigator = createStackNavigator({
    ListUsers,
    UserDetail,
},
// {
//     defaultNavigationOptions: ({ navigation }) => {
//         return {
//             headerTitle: (
//                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                     <Image
//                         style={{ height: 60, width: 60 }}
//                         source={require('../images/logo.png')} />
//                 </View>
//             ),
//             headerStyle: {
//                 backgroundColor: '#008dff',
//                 height: 60
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 display: 'flex',
//                 justifyContent: 'center',
//                 height: 100
//             },
//             // headerLeft: <View></View>,
//             // headerRight: <View></View>
//         }
//     }
// }
);

const servicesDrawer = createDrawerNavigator({
    Users: { screen: MainNavigator },
},
    {
        contentComponent: (props) => (
            <View style={{ flex: 1 }}>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <DrawerNavigatorItems {...props} />
                    <Button title="Logout" onPress={() => AsyncStorage.removeItem('@TradeUp:token')} />
                </SafeAreaView>
            </View>
        ),
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    });

const AppSwitchNavigator = createSwitchNavigator({
    AuthLoading: IsLoggedIn,
    App: servicesDrawer,
    Auth: AuthNavigator,
},
    {
        initialRouteName: 'AuthLoading',
    })

export default createAppContainer(AppSwitchNavigator);
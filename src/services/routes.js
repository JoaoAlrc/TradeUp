import React from 'react';
import { Image, View, SafeAreaView, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
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
});

const servicesDrawer = createDrawerNavigator({
    Users: { screen: MainNavigator },
},
    {
        contentComponent: (props) => (
            <View style={{ flex: 1, backgroundColor: '#008dff', display: 'flex', justifyContent: 'center' }}>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Image
                        style={{ height: 150, width: 150, marginLeft: 'auto', marginRight: 'auto' }}
                        source={require('../images/logo.png')}
                    />
                    <Button title="Logout" onPress={async () => {
                        await AsyncStorage.removeItem('@TradeUp:token')
                        props.navigation.navigate("Auth")
                    }} />
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
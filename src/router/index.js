import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Splash, Akun, Pesanan} from '../pages';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Akun" component={Akun} />
            <Tab.Screen name="Pesanan" component={Pesanan} />
        </Tab.Navigator>
    )
}

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="MainApp" component={MainApp} />
            <Stack.Screen name="Splash" component={Splash} />

        </Stack.Navigator >
    )
}

export default Routes

const styles = StyleSheet.create({})
import React from 'react'
import {View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './HomeScreen'
import OrderScreen from './OrderScreen'


const MainStack = createStackNavigator()

const MainNav = () => {
    return(
        <MainStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <MainStack.Screen name='HomeScreen' component={HomeScreen} />
            <MainStack.Screen name='Order' component={OrderScreen} />
        </MainStack.Navigator>
    )
}

export default MainNav
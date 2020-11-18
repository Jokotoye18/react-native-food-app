import React from 'react'
import { View, Text, Platform } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import Login from './Login'
import SignUp from './SignUp'

const AuthStack = createStackNavigator()

const AuthNav = () => {
    return(
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen name='Login' component={Login} />
            <AuthStack.Screen name='Sign Up' component={SignUp} />
        </AuthStack.Navigator>
    )
}

export default AuthNav

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@screens/Auth/Login';
import Welcome from '@screens/Auth/Welcome';
import Register from '@screens/Auth/Register';

import { AuthStackRouter } from '@typings/routes';

const AuthStack = createNativeStackNavigator<AuthStackRouter>();

export default () => (
  <AuthStack.Navigator initialRouteName="Welcome">
    <AuthStack.Screen
      name="Welcome"
      component={Welcome}
      options={() => ({
        animation: 'slide_from_left',
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={() => ({
        animation: 'slide_from_left',
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
      options={() => ({
        animation: 'slide_from_left',
        headerShown: false,
      })}
    />
  </AuthStack.Navigator>
);

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@screens/App/Home';

import { AppStackRouter } from '@typings/routes';

import theme from '@theme/index';

import UploadIcon from '@components/UploadInput';
import { ThothReader } from '@screens/App/Reader';

const AppStack = createNativeStackNavigator<AppStackRouter>();

export default () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={Home}
        options={() => ({
          animation: 'slide_from_right',
          headerShown: true,
          headerTitle: '',
          headerBackVisible: false,
          headerRight: () => <UploadIcon />,
          headerLeft: () => <UploadIcon />,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: theme.colors.light.backgroundLight,
          },
        })}
      />
      <AppStack.Screen
        name="Reader"
        component={ThothReader}
        options={() => ({
          animation: 'slide_from_right',
          headerShown: false,
          headerBackVisible: false,
          headerRight: () => <UploadIcon />,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: theme.colors.light.backgroundLight,
          },
        })}
      />
    </AppStack.Navigator>
  );
};

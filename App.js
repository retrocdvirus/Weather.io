// COSC2543 - Mobile Application Development
// Assignment 3
// Weather.io - A React Native weather app
// Authors:
//  -Nguyen Dinh Anh Khoi - s3695517
//  -Dang Khoi - s3694603
//  -Nguyen Duy Quang -s3574990

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import React from 'react';
import HomeScreen from './HomeScreen'
import Login from './Login'
import { Root } from "native-base";

const AppStack = createStackNavigator({HomeScreen: HomeScreen}, {headerMode: 'none'})
const AuthStack = createStackNavigator({LoginScreen: Login}, {headerMode: 'none'})

const SwitchStack= createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
    }
  )

 const AppContainer= createAppContainer(SwitchStack)

 export default()=>
  <Root>
    <AppContainer/>
  </Root>

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View,} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {WeatherStack} from "./src/navigation/WeatherNavigator";

const stack = createSwitchNavigator(
    {
      WeatherStack: {screen: WeatherStack},
    },
    {
      initialRouteName: 'WeatherStack',
      navigationOptions: {
        title: 'WeatherStack',
      },
      defaultNavigationOptions: {
          headerShown: false,
      },
    },
);

const AppContainer = createAppContainer(stack);

export default class App extends React.Component {

  render () {
      return (
          <View style={{flex: 1}}>
              <AppContainer/>
          </View>
      )
  }
}


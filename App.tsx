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
import {createStore} from "redux";
import {Provider} from "react-redux"
import {getWeatherDataForIos} from "./src/utilities/Utility";

const initialState = {
    weatherData: getWeatherDataForIos()
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'onChange' :
            return {
                weatherData: state.weatherData.concat({temperatureF: '37°', temperatureC: '24°', country: 'Miami', state: 'Rainy', precipitation: '75%',  wind: '20 mph', rainPred: '100%',
                    countryImage: require('./src/assets/city/new_york.jpeg'), weeklyData: [{
                        temperatureF: '37°', temperatureC: '24°', state: 'Snow', day: 'SUN', date: '17 Jan'
                    }, {
                        temperatureF: '34°', temperatureC: '23°', state: 'Rainy', day: 'MON', date: '18 Jan'
                    },{
                        temperatureF: '33°', temperatureC: '21°', state: 'Snow', day: 'TUE', date: '19 Jan'
                    },{
                        temperatureF: '32°', temperatureC: '20°', state: 'Sunny', day: 'WED', date: '20 Jan'
                    },{
                        temperatureF: '23°', temperatureC: '18°', state: 'Rainy', day: 'THU', date: '21 Jan'
                    }]})
            }
        default:
            return state
    }
}
const store = createStore(reducer)

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
          <Provider store={store}>
              <View style={{flex: 1}}>
                  <AppContainer/>
              </View>
          </Provider>
      )
  }
}


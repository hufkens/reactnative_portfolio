/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStackNavigator } from 'react-navigation';

import AppList from './src/screens/AppList';
import AppDetail from './src/screens/AppDetail';

import reducers from './src/reducers';

export default class App extends Component {
  render() {    
    return (      
      <Provider store={createStore(reducers)}>      
        <RootStack />        
      </Provider> 
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: AppList,
    Details: AppDetail
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Wee Taps',
      headerStyle: {
          backgroundColor: '#eb5330',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
          fontWeight: 'bold'
      }
    }
  }  
);

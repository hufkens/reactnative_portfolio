/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStackNavigator } from 'react-navigation';

import AlbumList from './src/components/AlbumList';
import AlbumDetail from './src/components/AlbumDetail';

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
    Home: AlbumList,
    Details: AlbumDetail
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

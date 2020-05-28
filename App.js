import React from 'react';
import {Text, Platform, Dimensions} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './Redux/store';

import Apper from './src/Index';
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;

EStyleSheet.build({
  $textColor: '#0275d8',
  $rem: entireScreenWidth / 380,
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Apper />
      </Provider>
    );
  }
}

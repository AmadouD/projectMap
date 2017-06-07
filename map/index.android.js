/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView,
  Button,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
 StackNavigator 
 } 
from  'react-navigation';
import Articles from "./src/pages/articles"
import Details  from "./src/pages/details"
 
export default class map extends Component {
  constructor(props){
    super(props);
   }
 
  render() {
  }
}
 const app =StackNavigator({
   Articles:  {screen: Articles},
   Details :  {screen: Details},

 })


AppRegistry.registerComponent('map', () => app);

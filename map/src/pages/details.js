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
import styles from  "../css/details";
import HTMLView from 'react-native-htmlview';
 var DOMParser = require('xmldom').DOMParser;

export default class Details extends Component {
  constructor(props){
    super(props);

   }

  /* <WebView
       source={{uri: params.lien }}
       style={{marginTop: 20}}
      />*/
     static navigationOptions = ({ navigation }) => ({
      title: `Details Articles`,
     });
  render() {
     const { params } = this.props.navigation.state;
     const createur=  '<p>'+params.creator+'</p>';
     
    return (
      <ScrollView style={styles.container}>
       <HTMLView
        
         value={params.description}
       
        />
       <HTMLView
          value={params.contenu}
        />

        <HTMLView
          value={createur}
        />

        <HTMLView
          value={params.date}
        />

      </ScrollView>
    );
  }
}
 



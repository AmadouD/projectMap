import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

module.exports= StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    padding: 10,
    backgroundColor: '#F5FCFF',
    marginTop:35,
  },

  image:{
  	width: 100, 
  	height: 50,
  	resizeMode:'contain',
  },
  titre:{
  	flex:0.6,
  },
  
});

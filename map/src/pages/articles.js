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
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
 StackNavigator 
 } 
from  'react-navigation';
import styles from  "../css/articles";
 var DOMParser = require('xmldom').DOMParser;

export default class Articles extends Component {
  constructor(props){
    super(props);
    this.state={
       feed: []
    }
   }

  static navigationOptions = ({ navigation }) => ({
    title: `Mapinfo`,
  });

   parseMyfeed(s) {
    console.log("Got feed with length: " + s.length);
    var doc  = new DOMParser().parseFromString(s, 'text/xml');
    var objs = [];
    var feed      =      doc.getElementsByTagName('item');
    var tl        =      doc.getElementsByTagName('title');
    var tr        =      doc.getElementsByTagName('guid');
    var desc      =      doc.getElementsByTagName('description');
    var content   =      doc.getElementsByTagName('content:encoded');
    var pubdate   =      doc.getElementsByTagName('pubDate'); 
    var creator   =      doc.getElementsByTagName('dc:creator');
    for (var i=0; i < feed.length; i++) {
     //console.log(i+" "+feed[i].textContent);
     objs.push({
        title:  tl[i+1].textContent,
        guid:   tr[i].textContent,
        desc:   desc[i+1] .textContent,
        content:content[i].textContent,
        pubdate:pubdate[i].textContent,
        creator:creator[i].textContent,
      })
    }
     this.setState({feed: objs});
     console.log(objs);
    }
    fetchFeed() {
      console.log('Fetching rss  feed...');
      var url = "http://guineenews.org/feed";
      fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
          this. parseMyfeed(responseText);
        })
        .catch((error) => {
          console.log('Error fetching the feed: ', error);
        });
    }
    componentDidMount() {
    this.fetchFeed();
    }

    onPressFeed(feedID,feedcont,feedDesc,feedPubdate,feedCreator) {
    //console.log('Pressed feed: ', feedID);
    this.props.navigation.navigate('Details',
    {lien:feedID,contenu:feedcont,description:feedDesc,date:feedPubdate,creator:feedCreator});

    }
  render() {
       const { navigate } = this.props.navigation;
    return (
   
         <ScrollView>
        {
          this.state.feed.map((feed, i) => {
            return (
              <TouchableOpacity onPress={() => this.onPressFeed(feed.guid,feed.content,feed.desc,feed.pubdate,feed.creator)}
                key={i.toString()} style={styles.container} >
                <Image source={{uri:
               'https://tse4.mm.bing.net/th?id=OIP.yAfXGW2m_BZgv6qQRAhgggEsBn&pid=15.1&P=0&w=300&h=103'}}
                 style={styles.image}
                />
                <Text style={styles.titre}>
                {feed.title}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
      
    );
  }
}
 

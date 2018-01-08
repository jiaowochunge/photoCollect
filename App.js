/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SegmentedControlIOS,
  FlatList,
  ScrollView
} from 'react-native';
import PhotoListItem from './PhotoListItem.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  state = {
    selectedIndex: 0,
    isLoading: false,
    localPhotoData: [],
    serverPhotoData: []
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    return fetch('http://localhost:3000/album')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          serverPhotoData: responseJson,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    console.log(this.state.serverPhotoData)
    return (
      <View style={styles.container}>
      {
        Platform.OS === 'ios' ? (
          <SegmentedControlIOS
            values={['LOCAL', 'SERVER']}
            selectedIndex={this.state.selectedIndex}
            onChange={(event) => {
              this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
            }}
          />
        ) : (
          <Text>'TODO'</Text>
        )
      }
        <FlatList
          data={this.state.serverPhotoData}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return (
              <PhotoListItem
                id={index}
                album={item}
                onPressItem={(id) => {
                  console.log(id)
                }}
                onPressArrow={(id) => {
                  console.log(id)
                }}
              />
            )
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

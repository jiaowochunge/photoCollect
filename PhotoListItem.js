import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, Image, Text } from 'react-native';

export default class PhotoListItem extends Component {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  _onArrowPress = () => {
    this.props.onPressArrow(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <View style={styles.cell}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              {this.props.album.title}
            </Text>
            <Text style={styles.sub_title}>
              {this.props.album.author}
            </Text>
          </View>
          <TouchableOpacity onPress={this._onArrowPress}>
            <Image
              style={styles.arrow}
              source={require('./assets/ic_keyboard_arrow_down_black_48dp_2x.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={styles.photo_box}>
        {
          this.props.album.photos.map((photo, index) => {
            return (
              <Image key={index} source={{uri: `http://localhost:3000/${photo}`}} style={styles.photo} />
            )
          })
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    margin: 8,
    padding: 8,
    backgroundColor: 'white',
    shadowColor: '#888888',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    fontSize: 16,
    color: 'gray'
  },
  sub_title: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
    marginBottom: 8
  },
  arrow: {
    width: 28,
    height: 28
  },
  photo_box: {
    width: '100%',
    height: 200
  },
  photo: {
    width: 200,
    height: 200,
    marginRight: 2
  }
});

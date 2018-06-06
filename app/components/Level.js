import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const images = [
  require('../images/A-dam-in-Rayong-Thailand.-634x634.jpg'),
  require('../images/Corkscrew-Falls-Hocking-Hills-State-Park-Ohio-USA.jpg'),
  require('../images/Eiffel-Tower-Paris-France-By-Darbare-Eli.jpg'),
  require('../images/Luoping-China-by-Rosanna-Leung.-634x420.jpg'),
  require('../images/Maldive-Islands-634x422.jpg'),
  require('../images/Maya-Bay-Thailand-634x422.jpg'),
]
const descriptions = [
  'A dam in Rayong, Thailand',
  'Corkscrew Falls Hocking Hills State Park, Ohio, USA',
  'Eiffel Tower, Paris, France',
  'Luoping, China',
  'Maldive, Islands',
  'Maya Bay, Thailand',
]

export default class Level extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: 0,
      image: images[0],
      desc: descriptions[0],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      const idx = (prevState.idx + 1) % descriptions.length;
      return {
        idx,
        image: images[idx],
        desc: descriptions[idx],
      };
    });
  }

  render() {
    const { image, desc } = this.state;

    return (
      <View style={styles.container}>
        <Image
          source={image}
          resizeMode='contain'
          style={styles.image}
        />
        <Text style={{ fontSize: 16 }}>{desc}</Text>
        <Button onPress={this.handleClick} title='Next' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 250,
    height: 250,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});

import React from 'react';
import { View } from 'react-native';

import Level from './app/components/Level';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Level />
      </View>
    );
  }
}

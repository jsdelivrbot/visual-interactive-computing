import React from 'react';
import Game from './Game';
import Board from './Board';
import Piece from './pieces/Piece';
import Transparent from './pieces/Transparent'
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image
} from 'react-vr';

export default class GerisGame extends React.Component {
  state = {
    playing: true,
  }

  startPlaying = () => {
    this.setState({ playing: false })
  }

  showHome() {
    if (this.state.playing) {
      return (
        <VrButton
          onClick={this.startPlaying}
        >
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 1,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 0.3, -4] }],
            }}>
            Geri's Game
        </Text>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.6,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, -0.5, -4] }],
            }}>
            Start
        </Text>
        </VrButton>
      )
    }
    else {
      return (
        <View>
          <Game />
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        <Pano source={asset('park.jpg')} />
        {this.showHome()}
      </View>
    );
  }
};

AppRegistry.registerComponent('GerisGame', () => GerisGame);

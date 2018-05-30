import React from 'react';
import Square from './Square';

import {
    asset,
    View,
    VrButton,
    Text
} from 'react-vr';

export default class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <View
                style={{
                    width: 4.5,
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                }}>
                <View
                    style={{
                        width: 1.5,
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        justifyContent: 'center',
                    }}>
                    {this.renderSquare(0)}
                    <View
                        style={{
                            borderTopWidth: 0.1,
                            borderBottomWidth: 0.1,
                            borderColor: 'red'
                        }}>{this.renderSquare(1)}</View>
                    {this.renderSquare(2)}
                </View>
                <View
                    style={{
                        width: 1.5,
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        justifyContent: 'center',
                        borderLeftWidth: 0.1,
                        borderRightWidth: 0.1,
                        borderColor: 'red'
                    }}>
                    {this.renderSquare(3)}
                    <View
                        style={{
                            borderTopWidth: 0.1,
                            borderBottomWidth: 0.1,
                            borderColor: 'red'
                        }}>{this.renderSquare(4)}</View>
                    {this.renderSquare(5)}
                </View>
                <View
                    style={{
                        width: 1.5,
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        justifyContent: 'center'
                    }}>
                    {this.renderSquare(6)}
                    <View
                        style={{
                            borderTopWidth: 0.1,
                            borderBottomWidth: 0.1,
                            borderColor: 'red'
                        }}>{this.renderSquare(7)}</View>
                    {this.renderSquare(8)}
                </View>
            </View>
        );
    }
}
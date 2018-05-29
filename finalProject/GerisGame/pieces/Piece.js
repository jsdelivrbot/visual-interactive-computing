import React from 'react';

import {
    asset,
    View,
    VrButton,
    Image
} from 'react-vr';

export default class Piece extends React.Component {

    render() {
        let assetString = this.props.color + '/' + this.props.piece + '.png';
        return (
            <View>
                <VrButton>
                    <Image
                        source={asset(assetString)}
                        style={{
                            width: 0.268, height: 0.268, borderWidth: 0.01,
                            borderColor: 'red', opacity:1
                        }}
                    />
                </VrButton>
            </View>
        )
    }

}
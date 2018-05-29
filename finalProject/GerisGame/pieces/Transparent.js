import React from 'react';

import {
    asset,
    View,
    VrButton,
    Image
} from 'react-vr';

export default class Transparent extends React.Component {

    render() {
        let assetString = 'black/alfil'  + '.png';
        return (
            <View>
                <VrButton>
                    <Image
                        source={asset(assetString)}
                        style={{
                            width: 0.268, height: 0.268, borderWidth: 0.01,
                            borderColor: 'red', opacity:0
                        }}
                    />
                </VrButton>
            </View>
        )
    }

}
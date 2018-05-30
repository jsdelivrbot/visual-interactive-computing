import React from 'react';

import {
    asset,
    View,
    VrButton,
    Image,
    Text
} from 'react-vr';

export default class Square extends React.Component {

    render() {
        let imgPath = "";
        switch (this.props.value) {
            case "X":
                imgPath = 'x.png';
                break;
            case "O":
                imgPath = 'o.png';
                break;
            case "null":
                imgPath = 't.png';
                break;
        }

        return (
            <VrButton onClick={this.props.onClick}>
                <Image
                    source={asset(imgPath)}
                    style={{
                        width: 1, height: 1, opacity: 1
                    }}
                />
            </VrButton>
        )
    }

}
import React from 'react';
import Board from './Board';
import {
    Text,
    View,
    VrButton,
    Image
} from 'react-vr';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill("null")
                }
            ],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            let a = lines[i][0];
            let b = lines[i][1];
            let c = lines[i][2];
            if (squares[a] !== null 
                && squares[a] !== 'null' 
                && squares[a] 
                && squares[a] === squares[b] 
                && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return "";
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (squares[i] !== 'null') {
            return;
        }
        if (this.calculateWinner(squares) == null) {
            return;
        }

        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    restartGame() {
        this.setState({
            history: [
                {
                    squares: Array(9).fill("null")
                }
            ],
            stepNumber: 0,
            xIsNext: true,
        }
        )
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);
        /* 
                const moves = history.map((step, move) => {
                    const desc = move ?
                        'Go to move #' + move :
                        'Go to game start';
                    return (
                        <li key={move}>
                            <button onClick={() => this.jumpTo(move)}>{desc}</button>
                        </li>
                    );
                });
         */
        let status;
        let color;
        let clicker;
        if (winner === "" || winner === null || winner === 'null') {
            status = "Now plays: " + (this.state.xIsNext ? "X" : "O");
            color = '#777879'  ;
            clicker = ((i) => this.handleClick(i));
        } else {
            status = "Winner: " + winner;
            color = '#008000'
            clicker = (() => this.handleClick());            
        }
        return (
            <View>
                <View
                    style={{
                        layoutOrigin: [0.5, 0.5],
                        transform: [{ translate: [0, 0, -5.1] }],
                    }}>
                    <Board
                        squares={current.squares}
                        onClick={clicker}
                    />
                </View>
                <View>
                    <Text
                        style={{
                            backgroundColor: color,
                            fontSize: 0.5,
                            fontWeight: '300',
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{ translate: [0, 5.3, -5] }],
                        }}>{status}</Text>
                    {/* <ol>{moves}</ol> */}
                </View>
                <View>
                    <VrButton onClick={() => this.restartGame()} >
                        <Text
                            style={{
                                backgroundColor: '#6d0e0e',
                                fontSize: 0.5,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.1,
                                paddingRight: 0.1,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                transform: [{ translate: [0, 1.7, -5] }],
                            }}>
                            Restart game
                         </Text>
                    </VrButton>
                </View>
            </View>
        );
    }
}
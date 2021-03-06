import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Roll from './Roll';
import Numbers from '../helpers/numbers';
import { getWinner, getNum } from '../helpers/winner';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            nums: Numbers(),
            winner: { pos: 0, num: 0, color: '' },
            transition: 5,
            rolled: false,
        };
    }
    handleClick() {
        const winner = getWinner(this.state.nums);
        const rand = Math.random();
        const minusPos = !(rand > 0.5) ? getNum(5, 45) : getNum(60, 85);
        winner.pos -= minusPos;
        if (!this.state.rolled) {
            this.setState({ winner, transition: 5 });
            setTimeout(() => {
                this.setState({ rolled: true });
            }, 5000);
        }
    }
    handleReset() {
        console.log('reset');
        this.setState({ transition: 0, rolled: false, winner: { pos: 0 } });
    }
    render() {
        return (
            <div>
                <h1>React Roll</h1>
                {this.state.rolled ? (
                    <h2>
                        Rolled{' '}
                        <span style={{ color: this.state.winner.color }}>
                            {this.state.winner.num}
                        </span>
                    </h2>
                ) : null}

                <Roll
                    transition={this.state.transition}
                    nums={this.state.nums}
                    matrix={this.state.winner.pos}
                />
                <div className="controll">
                    <Button onClick={this.handleClick} raised>
                        Roll
                    </Button>
                    <Button onClick={this.handleReset} raised>
                        Reset
                    </Button>
                </div>
            </div>
        );
    }
}

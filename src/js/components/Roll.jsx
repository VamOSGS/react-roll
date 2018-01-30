import React, { Component } from 'react';
import Numbers from '../helpers/numbers';
import List from './List';

export default class Roll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: Numbers(),
            count: [1, 2, 3, 4, 5, 1],
        };
    }

    render() {
        return (
            <div className="Roll">
                <div
                    className="Lists"
                    style={{ transform: `matrix(1, 0, 0, 1, ${this.props.matrix},0)` }}
                >
                    {this.state.count.map((k, uid) => <List key={uid} nums={this.state.nums} />)}
                </div>
            </div>
        );
    }
}

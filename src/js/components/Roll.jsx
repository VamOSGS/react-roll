import React, { Component } from 'react';
import List from './List';

export default class Roll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: [1, 2, 3, 4, 5, 1],
        };
    }
    render() {
        return (
            <div className="Roll">
                <div
                    className="Lists"
                    style={{
                        transform: `matrix(1, 0, 0, 1, ${this.props.matrix},0)`,
                        transitionDuration: `${this.props.transition}s`,
                    }}
                >
                    {this.state.count.map((k, uid) => <List key={uid} nums={this.props.nums} />)}
                </div>
            </div>
        );
    }
}

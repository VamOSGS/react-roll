import React, { Component } from 'react';
import Numbers from '../helpers/numbers';
import List from './List';

export default class Roll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: Numbers(),
            count: [1, 2, 3, 4, 5,1, 2, 3, 4, 5,]
        };
    }
    render() {
        return (
            <div className={'Roll'}>
                <div className="Lists">
                    {this.state.count.map((k, uid) => (
                        <List matrix={this.props.matrix} key={uid} nums={this.state.nums} />
                    ))}
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import Roll from './Roll';
import Button from 'material-ui/Button';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            defaultMatrix: 0,
        };
    }
    handleClick() {
        this.setState({ defaultMatrix: -4900 });
    }
    render() {
        return (
            <div>
                <h1>React Roll</h1>
                <Roll matrix={this.state.defaultMatrix} />
                <div className="controll">
                    <Button onClick={this.handleClick} raised>
                        Roll
                    </Button>
                </div>
            </div>
        );
    }
}

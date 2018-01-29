import React, { Component } from 'react';
import Roll from './Roll';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 5,
            name: 'nice'
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        return (
            <div>
                <div className="controll">
                    <form autoComplete="off">
                        <FormControl>
                            <InputLabel>Number</InputLabel>
                            <Select
                                value={this.state.age}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple'
                                }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <Button raised>Roll</Button>
                </div>
                <Roll />
            </div>
        );
    }
}

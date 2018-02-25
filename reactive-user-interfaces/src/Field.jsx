import React, { Component } from 'react';
import './Field.css';

class Field extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(this.props.toChange, e.target.value);
    }

    render() {
        return (
            <div className="field">
                <label>{this.props.label}</label>
                <input onChange={this.onChange} value={this.props.content}></input>
            </div>
        );
    }
}

export default Field;

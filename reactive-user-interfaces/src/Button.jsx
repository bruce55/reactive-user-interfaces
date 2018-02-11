import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.children);
    }

    render() {
        return (
            <button type="button" className={'rune-button' + (this.props.children === this.props.selected ? ' rune-button-active' : '')} onClick={this.handleClick}>{this.props.children}</button>           
        );
    }
}

export default Button;

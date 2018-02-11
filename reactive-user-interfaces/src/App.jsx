import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
    constructor(props) {
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.state = {
            clicked: ""
        }
    }

    buttonClicked(buttonText) {
        this.setState({
            clicked: buttonText
        })
    }

    render() {
        return (
            <div id="container">
                <div id="buttons-flex">
                    <Button onClick={this.buttonClicked} selected={this.state.clicked}>First Button</Button>
                    <Button onClick={this.buttonClicked} selected={this.state.clicked}>Second Button</Button>
                    <Button onClick={this.buttonClicked} selected={this.state.clicked}>Third Button</Button>
                </div>
                <div id="text-box">
                    {this.state.clicked ? 'You have selected: ' + this.state.clicked : 'Go select a button!'}
                </div>
            </div>
            
        );
    }
}

export default App;

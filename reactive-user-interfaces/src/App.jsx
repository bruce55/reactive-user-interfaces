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
        const buttons = ['First', 'Second', 'Third'].map((text, i) => 
            <Button onClick={this.buttonClicked} selected={this.state.clicked} key={'button-' + text}>{text + ' Button'}</Button>)
        return (
            <div id="container">
                <div id="buttons-flex">
                    {buttons}
                </div>
                <div id="text-box">
                    {this.state.clicked ? 'You have selected: ' + this.state.clicked : 'Go select a button!'}
                </div>
            </div>
            
        );
    }
}

export default App;

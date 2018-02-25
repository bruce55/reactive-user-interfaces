import React, { Component } from 'react';
import './App.css';
import Field from './Field'
import Poster from './Poster'

class App extends Component {
    constructor(props) {
        super(props);
        this.updateText = this.updateText.bind(this);
        this.state = {
            name: 'IMA Spring Show 2018',
            loc: 'NYU Shanghai, 9th floor',
            time: 'May 11th, 5pm - 7pm'
        }
    }

    updateText(label, text) {
        this.setState({
            [label]: text
        })
        console.log(this.state)
    }

    render() {
        return (
            <div id="container">
                <form id="fields">
                    <Field label="Event name" onChange={this.updateText} toChange="name" content={this.state.name}/>
                    <Field label="Location" onChange={this.updateText} toChange="loc" content={this.state.loc}/>
                    <Field label="Time" onChange={this.updateText} toChange="time" content={this.state.time}/>
                </form>
                <Poster name={this.state.name} loc={this.state.loc} time={this.state.time}/>
            </div>
        );
    }
}

export default App;

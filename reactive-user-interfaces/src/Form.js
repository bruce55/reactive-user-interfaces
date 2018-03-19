import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);

        this.state = {
            name: '',
            email:''
        }
    }
    onNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    onEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            email: this.state.email
        })
    }

    render() {
        return (
            <form className="form">
                <input name="Name" value={this.state.name} onChange={this.onNameChange}></input>
                <input name="Email" value={this.state.email} onChange={this.onEmailChange}></input>
                <button onClick={this.onSubmit}>Submit</button>
            </form>
    );
  }
}

export default Form;

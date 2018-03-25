import React, { Component } from 'react';
import './ContactField.css';

class ContactField extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: ''
        }
    }

    onChange(e) {
        this.props.onChange(this.props.label, e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    render() {
        if (this.props.edit) {
            return (
                <div className="contact-field">
                    <i className="material-icons">{this.props.icon}</i>
                    <input onChange={this.onChange} value={this.state.value}></input>
                </div>
            )
        } else if (this.props.fields) {
            let fields;
            if (Array.isArray(this.props.fields)) {
                fields = this.props.fields.map((field, i) =>
                    <li key={this.props.label + i}>{field}</li>
                )
            } else {
                fields = <li>{this.props.fields}</li>
            }
            

            return (
                <div className="contact-field">
                    <i className="material-icons">{this.props.icon}</i>
                    <ul>{fields}</ul>
                </div>
            );
        } else {
            return ''
        }
    }
}

export default ContactField;

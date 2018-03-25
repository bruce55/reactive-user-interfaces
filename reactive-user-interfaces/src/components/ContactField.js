import React, { Component } from 'react';
import './ContactField.css';

class ContactField extends Component {
    render() {
        if (this.props.fields) {
            const fields = this.props.fields.map((field, i) =>
                <li key={this.props.label + i}>{field}</li>
            )

            return (
                <div className="contact-field">
                    <i className="material-icons">{this.props.icon}</i>
                    <ul>{fields}</ul>
                </div>
            );
        } else if (this.props.edit) {
            return (
                <div className="contact-field">
                    <i className="material-icons">{this.props.icon}</i>
                    <input></input>
                </div>
            )
        }
        return ''
    }
}

export default ContactField;

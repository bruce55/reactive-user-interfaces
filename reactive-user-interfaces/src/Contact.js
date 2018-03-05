import React, { Component } from 'react';
import './Contact.css';

class ContactItem extends Component {
    render() {
        return (
            <li className="contact-item">
                <div className="avatar">
                    <span>{this.props.contact.name[0]}</span>
                </div>
                <span>{this.props.contact.name}</span>
            </li>
        );
    }
}

class Contact {
    constructor(name) {
        this.name = name;
    }
}

export default ContactItem;
export { Contact };
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const randomColor = require('random-color');

class ContactItem extends Component {
    render() {
        return (
            <li className="contact-item">
                <Link to={"/contact/" + this.props.contact.id}>
                    <div className="avatar" style={{ backgroundColor: this.props.contact.color}}>
                        <span>{this.props.contact.name[0]}</span>
                    </div>
                    <span>{this.props.contact.name}</span>
                </Link>

            </li>
        );
    }
}

class Contact {
    constructor(name, id, numbers, emails, addrs, country) {
        this.name = name;
        this.id = id;

        const rcolor = randomColor(0.6, 0.88);
        this.color = rcolor.hexString();

        this.numbers = numbers;
        this.emails = emails;
        this.addrs = addrs;
        this.country = country;
    }
}

export default ContactItem;
export { Contact };
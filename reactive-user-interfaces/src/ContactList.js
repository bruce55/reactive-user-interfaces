import React, { Component } from 'react';
import './ContactList.css';
import ContactItem from './Contact';

class ContactList extends Component {
    constructor(props) {
        super(props);
        if (props.filter) {
            this.state = {
                /** @type {Array} */
                displayContacts: this.filterContacts(props.filter)
            }
        } else {
            this.state = {
                /** @type {Array} */
                displayContacts: props.contacts.slice()
            }
        }
    }

    filterContacts(filter) {
        return filter.map((i) => this.props.contacts[i])
    }


    render() {
        let listElements = this.state.displayContacts.map((contact, i) =>
            <ContactItem key={'contact-' + i} contact={contact}></ContactItem>
            )
        return (
            <ul className="contact-list">
                {listElements}
            </ul>
        );
    }
}

export default ContactList;

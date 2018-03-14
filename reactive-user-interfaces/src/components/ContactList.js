import React, { Component } from 'react';
import './ContactList.css';
import ContactItem from './Contact';

class ContactList extends Component {
    
    filterContacts(filter) {
        return filter.map((i) => this.props.contacts[i])
    }


    render() {
        let displayContacts;
        if (this.props.filter) {
            displayContacts = this.filterContacts(this.props.filter);
        } else {
            displayContacts = this.props.contacts.slice();
        }
        let listElements = displayContacts.map((contact, i) =>
            <ContactItem key={'contact-' + contact.id} contact={contact}></ContactItem>
        )
        if (this.props.reversed) {
            listElements.reverse()
        }
        return (
            <ul className="contact-list">
                {listElements}
            </ul>
        );
    }
}

export default ContactList;

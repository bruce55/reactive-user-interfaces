import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactListPage.css';
import ContactList from '../components/ContactList';

class ContactListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reversed: false
        }
        this.reverseContacts = this.reverseContacts.bind(this);
    }

    reverseContacts(e) {
        e.preventDefault();
        this.setState({
            reversed: !this.state.reversed
        })
    }

    render() {
        return (
            <div className="contact-list-page">
                <h1>
                    <span>Contacts</span>
                    <Link to="#" onClick={this.reverseContacts}><i className="material-icons">sort_by_alpha</i></Link>
                    <Link to="/filter"><i className="material-icons">search</i></Link>
                    </h1>
                <div id="page-container">
                    <h2>Recents</h2>
                    <ContactList id="list-recent" contacts={this.props.contacts} filter={this.props.recents}></ContactList>
                    <h2>#</h2>
                    <ContactList id="list-all" contacts={this.props.contacts} reversed={this.state.reversed}></ContactList>
                </div>
                <Link to="/create" id="fab"><i className="material-icons">add</i></Link>
            </div>
        );
    }
}
export default ContactListPage;

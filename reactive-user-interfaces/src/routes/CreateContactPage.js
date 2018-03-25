import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';
import ContactField from '../components/ContactField'

import { Contact } from '../components/Contact';


class CreateContactPage extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            contact: new Contact()
        }
    }

    goBack() {
        window.history.back();
    }

    render() {
        return (
            <div className="contact-page">
                <h1 style={{ backgroundColor: this.state.contact.color }}>
                    <Link to="#" onClick={this.goBack}><i className="material-icons">arrow_back</i></Link>
                    <span>New Contact</span>
                    <i className="material-icons">save</i>
                </h1>
                <div id="page-container">
                    <ContactField icon="person" fields={this.state.contact.name} label="name" edit/>
                    <ContactField icon="phone" fields={this.state.contact.numbers} label="numbers" edit/>
                    <ContactField icon="email" fields={this.state.contact.emails} label="emails" edit/>
                    <ContactField icon="location_city" fields={this.state.contact.addrs} label="addrs" edit/>
                    <ContactField icon="location_on" fields={this.state.contact.country} label="country" edit/>
                </div>
            </div>
        );
    }
}
export default CreateContactPage;

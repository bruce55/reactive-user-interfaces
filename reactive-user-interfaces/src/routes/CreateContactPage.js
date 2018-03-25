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

        this.updateField = this.updateField.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    goBack() {
        window.history.back();
    }

    updateField(field, text) {
        this.setState((previousState) => {
            previousState.contact[field] = text;
            return previousState;
        })
    }

    onClick() {
        this.props.addContact(this.state.contact)
    }

    render() {
        return (
            <div className="contact-page">
                <h1 style={{ backgroundColor: this.state.contact.color }}>
                    <Link to="#" onClick={this.goBack}><i className="material-icons">arrow_back</i></Link>
                    <span>New Contact</span>
                    <i className="material-icons" onClick={this.onClick}>save</i>
                </h1>
                <div id="page-container">
                    <ContactField icon="person" fields={this.state.contact.name} label="name" edit onChange={this.updateField}/>
                    <ContactField icon="phone" fields={this.state.contact.numbers} label="numbers" edit onChange={this.updateField}/>
                    <ContactField icon="email" fields={this.state.contact.emails} label="emails" edit onChange={this.updateField}/>
                    <ContactField icon="location_city" fields={this.state.contact.addrs} label="addrs" edit onChange={this.updateField}/>
                    <ContactField icon="location_on" fields={this.state.contact.country} label="country" edit onChange={this.updateField}/>
                </div>
            </div>
        );
    }
}
export default CreateContactPage;

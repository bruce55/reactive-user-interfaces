import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';
import ContactField from '../components/ContactField'

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        window.history.back();
    }

    render() {
        return (
            <div className="contact-page">
                <h1 style={{ backgroundColor: this.props.contact.color }}>
                    <Link to="#" onClick={this.goBack}><i className="material-icons">arrow_back</i></Link>
                    <span>{this.props.contact.name}</span>
                    <i className="material-icons">edit</i>
                </h1>
                <div id="page-container">
                    <ContactField icon="phone" fields={this.props.contact.numbers} label="numbers" />
                    <ContactField icon="email" fields={this.props.contact.emails} label="emails" />
                    <ContactField icon="location_city" fields={this.props.contact.addrs} label="addrs" />
                    <ContactField icon="location_on" fields={this.props.contact.country} label="country" />
                </div>
            </div>
        );
    }
}
export default ContactPage;

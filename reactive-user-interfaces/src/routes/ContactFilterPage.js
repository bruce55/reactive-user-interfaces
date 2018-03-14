import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactFilterPage.css';
import ContactList from '../components/ContactList';

class ContactFilterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            filter: []
        }
        this.clearText = this.clearText.bind(this);
        this.goBack = this.goBack.bind(this);
        this.textEntered = this.textEntered.bind(this);
    }

    clearText(e) {
        e.preventDefault();
        this.setState({
            text: ''
        })
    }

    goBack() {
        window.history.back();
    }

    textEntered(e) {
        this.setState({
            text: e.target.value
        })
        let matched = [];
        if (this.state.text !== '') {
            matched = this.props.contacts.filter(c =>
                Object.values(c).find(str => String(str).toLowerCase().indexOf(this.state.text.toLowerCase()) !== -1)
            ).map(c => c.id)
        }
        this.setState({
            filter: matched
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="contact-list-page">
                <h1>
                    <Link to="#" onClick={this.goBack}><i className="material-icons">arrow_back</i></Link>
                    <input id="filter" onChange={this.textEntered} value={this.state.text}></input>
                    <Link to="#" onClick={this.clearText}><i className="material-icons">close</i></Link>
                    </h1>
                <div id="page-container">
                    <h2>Search</h2>
                    <ContactList id="list-all" contacts={this.props.contacts} filter={this.state.filter}></ContactList>
                </div>
            </div>
        );
    }
}
export default ContactFilterPage;

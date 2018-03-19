import React, { Component } from 'react';
import './App.css';

import Form from './Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);

        this.state = {
            contacts: [
                { name: 'Person 1', email: 'first@person.com' },
                { name: 'Person 2', email: 'second@person.com' },
                { name: 'Person 3', email: 'third@person.com' }
            ]
        }
    }

    addContact(c) {
        this.setState({
            contacts: this.state.contacts.concat(c)
        })
    }

    render() {
        const contacts = this.state.contacts.map((c, i) =>
            <li key={"contact-" + i}>{c.name} - {c.email}</li>
            )
        return (
            <div className="App">
                <h1>Contacts</h1>
                <ol>{contacts}</ol>
                <Form onSubmit={this.addContact}></Form>
      </div>
    );
  }
}

export default App;

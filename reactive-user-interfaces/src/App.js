import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList';
import { Contact } from './Contact';

class App extends Component {
    constructor(props) {
        super(props);
        const names = ["Bruce Luo", "Joshua Clayton", "Matthew Belanger", "Rune Madsen", "Shirley Huang"];
        
        this.state = {
            recents: [4, 3, 1],
                contacts: names.map((contact) => new Contact(contact))
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Contacts</h1>
                <div id="search-bar"></div>
                <div id="list-container">
                    <h2>Recents</h2>
                    <ContactList id="list-recent" contacts={this.state.contacts} filter={this.state.recents}></ContactList>
                    <h2>#</h2>
                    <ContactList id="list-all" contacts={this.state.contacts}></ContactList>
                </div>
            </div>
        );
    }
}
export default App;

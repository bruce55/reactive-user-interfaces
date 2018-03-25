import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Contact } from './components/Contact';
import ContactListPage from './routes/ContactListPage';
import ContactPage from './routes/ContactPage';
import ContactFilterPage from './routes/ContactFilterPage';
import CreateContactPage from './routes/CreateContactPage'

class App extends Component {
    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);

        let initialState = localStorage.getItem('ContactApp');
        if (initialState) {
            this.state = JSON.parse(initialState);
        } else {
            const contactsData = [
                ["Billy Chen", ['+86 1392922xxxx'], null, null, ['Panama']],
                ["Bruce Luo", ['+1(917)-287-****', '+86 1762118xxxx'], ['bruce.luo+git@nyu.edu'], ['1555 Century Ave, Pudong Xinqu, Shanghai Shi, China, 200122'], ['China']],
                ["Jack B. Du", ['+86 153 5399 xxxx'], null, null, ['China']],
                ["Johan Yao", null, null, null, ['Philippine']],
                ["Joshua Clayton", ['021-123456789'], ['abc@nyu.edu'], ['Somewhere in New York'], ['America']],
                ["Matthew Belanger", ['021-123456789'], ['abc@nyu.edu'], ['1555 Century Ave, Pudong Xinqu, Shanghai Shi, China, 200122'], ['America']],
                ["Rune Madsen", ['021-123456789'], ['abc@nyu.edu'], ['Somewhere in Copenhagen'], ['Denmark']],
                ["Shirley Huang", ['021-123456789'], ['abc@nyu.edu'], ['NYU Game Center'], ['China']],
                ["Toshiko Omori", null, null, null, ['Japan']],
                ["Michael Chang", ['+86 150 0070 xxxx'], null, null, ['America']]
            ];

            this.state = {
                recents: [4, 3, 1],
                contacts: contactsData.map((contact, i) => new Contact(contact[0], i, contact[1], contact[2], contact[3], contact[4]))
            }
        } 
    }

    componentDidUpdate() {
        localStorage.setItem('ContactApp', JSON.stringify(this.state));
    }

    addContact(contact) {
        this.setState((prevState) => {
            contact.id = this.state.contacts.length;
            prevState.contacts.push(contact);
            prevState.contacts.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            })

            return prevState;
        })
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={props =>
                                <ContactListPage contacts={this.state.contacts} recents={this.state.recents} />}
                        />
                        <Route
                            path="/contact/:id"
                            render={props => {
                                const contact = this.state.contacts.find(
                                    c => c.id === parseInt(props.match.params.id, 10)
                                )
                                return <ContactPage contact={contact}></ContactPage>
                            }}
                        />
                        <Route
                            exact
                            path="/filter"
                            component={props => 
                                <ContactFilterPage contacts={this.state.contacts} />}
                        />
                        <Route
                            exact
                            path="/create"
                            component={props =>
                                <CreateContactPage addContact={this.addContact}/>}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactFilterPage.css';
import ContactList from '../components/ContactList';

class ContactFilterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            searchMatch: [],
            filterMatch:[],
            countries: Array.from(new Set(props.contacts.map(c=>c.country[0])))
        }
        this.clearText = this.clearText.bind(this);
        this.goBack = this.goBack.bind(this);
        this.textEntered = this.textEntered.bind(this);
        this.countryChanged = this.countryChanged.bind(this);
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
        if (e.target.value !== '') {
            matched = this.props.contacts.filter(c =>
                Object.values(c).find(str => String(str).toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
            ).map(c => c.id)
        }
        this.setState({
            searchMatch: matched
        })
    }

    countryChanged() {
        let matched = [];
        const selected = document.getElementById('country-selector').value;
        if (selected !== '') {
            matched = this.props.contacts.filter(c =>
                c.country[0] === selected
            ).map(c => c.id)
        }
        this.setState({
            filterMatch: matched
        })
    }

    render() {
        const countries = this.state.countries.map(country => <option key={country} value={country}>{country}</option>);
        let mergedMatch = [];
        if (this.state.filterMatch.length === 0 || this.state.searchMatch.length === 0) {
            if (this.state.text.length > 0) {
                mergedMatch = this.state.searchMatch.concat(this.state.filterMatch);
            }
            
        } else {
            mergedMatch = this.state.filterMatch.filter(n => this.state.searchMatch.indexOf(n) !== -1)
        }
        
        return (
            <div className="contact-list-page">
                <h1>
                    <Link to="#" onClick={this.goBack}><i className="material-icons">arrow_back</i></Link>
                    <input id="filter" onChange={this.textEntered} value={this.state.text}></input>
                    <Link to="#" onClick={this.clearText}><i className="material-icons">close</i></Link>
                    </h1>
                <div id="page-container">
                    <div id="filters">
                        <select onChange={this.countryChanged} id="country-selector">
                            <option value="">Country Filter</option>
                            {countries}</select>
                    </div>
                    <h2>Search</h2>
                    <ContactList id="list-all" contacts={this.props.contacts} filter={mergedMatch}></ContactList>
                </div>
            </div>
        );
    }
}
export default ContactFilterPage;

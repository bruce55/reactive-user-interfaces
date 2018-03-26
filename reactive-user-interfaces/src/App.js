import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2663a6d57fc14ea28fb2c6aa07827f5d').then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        }).then(data => {
            this.setState({
                articles: data.response.docs,
                isLoading: false
            })
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="App">
                    <p>Loading...</p>
                </div>
            )
        } else {
            return <div className="App">
                <h1>{this.state.articles[0].headline.main}</h1>
                <p>{this.state.articles[0].snippet}</p>
                <a href={this.state.articles[0].web_url}>Open Here</a>
            </div>
        }

    }
}

export default App;

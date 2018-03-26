import React, { Component } from 'react';
import ArticleListing from './ArticleListing'
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
            let listings = this.state.articles.map((article, key) => 
                <ArticleListing
                key={'article-'+article._id}
        headline={article.headline.main}
        time={article.pub_date}
        summary={article.snippet}
        by={article.byline.original}
        kicker={article.headline.kicker}
        img={"//www.nytimes.com/" + article.multimedia[1].url}
    />)
return (
    <div className="App">
        <ol className="story-menu">
            {listings}
        </ol>
    </div>
        );
           
        }

    }
    
}

export default App;

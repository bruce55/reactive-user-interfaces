import React, { Component } from 'react';
import ArticleListing from './ArticleListing'
import './App.css';

let content = [
    {
        'headline': 'Kodak\'s Dubious Cryptocurrency Gamble',
        'time':'Jan. 30, 2018',
        'summary': 'What\'s a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.',
        'by': 'Kevin Roose',
        'kicker': 'The Shift',
        'img':'30ROOSE-3-mediumThreeByTwo210.jpg'

    },
    {
        'headline': 'Thomson Reuters Sells Stake in Unit to Blackstone-Led Group',
        'time': 'Jan. 30, 2018',
        'summary': 'A consortium announced that it had taken a 55 percent stake in the financial and risk division in a deal that values the unit at $20 billion, including debt.',
        'by': 'Chad Bray',
        'img': '31db-thomsonreuters-1-mediumThreeByTwo210.jpg'
    },
    {
        'headline': 'China Could Target U.S. Firms if Trump Levies Tariffs, Group Warns',
        'time': 'Jan. 30, 2018',
        'summary': 'Major products like Boeing planes and American soybeans may be singled out if Washington imposes new restrictions on China.',
        'by': 'Sui-Lee Wee',
        'img': '31CHINATRADE-alpha-mediumThreeByTwo210.jpg'
    }
]

class App extends Component {
    render() {
        let listings = content.map((article, key) => 
            <ArticleListing
                key={'article-'+key}
                headline={article.headline}
                time={article.time}
                summary={article.summary}
                by={article.by}
                kicker={article.kicker}
                img={article.img}
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

export default App;

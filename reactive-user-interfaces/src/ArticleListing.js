import React, { Component } from 'react';
import './ArticleListing.css';

class ArticleListing extends Component {
    render() {
        let img='';
        if (this.props.multimedia[1]) {
            const imgUrl = '//www.nytimes.com/' + this.props.multimedia[1].url;
            img = <img width="190" height="126" alt="" src={imgUrl} itemProp="thumbnailUrl" />
        }
        const dateObj = new Date(Date.parse(this.props.time));
        return (
            <li>
                <article className="story">
                    <div className="story-body">
                        <a className="story-link" href={this.props.web_url}>
                            <div className="story-meta">
                                {this.props.kicker &&
                                    <h3 className="kicker">{this.props.kicker}</h3>}
                                <h2 className="headline">{this.props.headline}</h2>
                                <p className="summary">{this.props.summary}</p>
                                <p className="byline">{this.props.by}</p>
                            </div>
                            <div className="wide-thumb">
                                {img}
                            </div>
                        </a>
                    </div>
                    <footer className="story-footer">
                        <time className="dateline">{dateObj.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </footer>
                </article>
            </li>

        );
    }
}

export default ArticleListing;
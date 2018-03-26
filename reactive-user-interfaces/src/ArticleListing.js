import React, { Component } from 'react';
import './ArticleListing.css';

class ArticleListing extends Component {
    render() {
        const imgUrl = require(`./img/${this.props.img}`)
      return (
          <li>
              <article className="story">
                  <div className="story-body">
                      <a className="story-link" href="#">
                          <div className="story-meta">
                              {this.props.kicker &&
                                  <h3 className="kicker">{this.props.kicker}</h3>}
                              <h2 className="headline">{this.props.headline}</h2>
                              <p className="summary">{this.props.summary}</p>
                              <p className="byline">By <span>{this.props.by}</span></p>
                          </div>
                          <div className="wide-thumb">
                              <img width="190" height="126" alt="" src={imgUrl} itemProp="thumbnailUrl" />
                          </div>
                      </a>
                  </div>
                  <footer className="story-footer">
                      <time className="dateline">{this.props.time}</time>
                  </footer>
              </article>
          </li>
          
    );
  }
}

export default ArticleListing;
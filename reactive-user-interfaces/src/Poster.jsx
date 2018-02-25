import React, { Component } from 'react';
import './Poster.css';

class Poster extends Component {
  render() {
    return (
        <div id="poster">
            <div id="poster-name">{this.props.name}</div>
            <div id="poster-bottom">
                {this.props.loc}<br />
                {this.props.time}
            </div>
        </div>
    );
  }
}

export default Poster;

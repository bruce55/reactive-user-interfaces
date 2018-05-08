import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WorkListEntry.css';

class WorkListEntry extends Component {
    thumbUrl() {
        return this.props.thumb.fields.file.url + '?fm=jpg&q=75&fit=fill&w=' + Math.round(window.devicePixelRatio * 350) + '&h=' + Math.round(window.devicePixelRatio * 328)
    }

    render() {
        return (
            <Link to={"/work/" + this.props.id} className="work-entry">
                <div className="work-thumb" style={this.props.thumb ? { backgroundImage: "url(" + this.thumbUrl() + ")" } : null}></div>
                <p>{this.props.title}</p>
            </Link>
        );
    }
}

export default WorkListEntry;
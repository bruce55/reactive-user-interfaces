import React, { Component } from 'react';
import './WorkPage.css';
import ApiCalls from '../ApiCalls';

let marked = require('marked')
let renderer = new marked.Renderer()
renderer.image = function (href, title, text) {
    let out
    if (href.substr(-4) === '.gif') {
        out = '<img src="' + href + '" alt="' + text + '"'
    } else {
        out = '<img src="' + href + '?fm=jpg&q=75&w=' + Math.round(window.devicePixelRatio * 450) + '" alt="' + text + '"'
    }

    if (title) {
        out += ' title="' + title + '"'
    }
    out = '<a target="_blank" href="' + href + '">' + out + '/></a>'
    return out
}

class WorkPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {
                fields: {
                    title: "",
                    thumb: "",
                    desc:""
                }
            }
        }

    }

    componentWillMount() {
        ApiCalls.getProject(this.props.work, (newState) => {
            this.setState({project: newState.project})
        });
    }

    getHeaderBg() {
        const bg1 = 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4))'
        const bg2 = (this.state.project.fields.thumb)
            ? ', url(' + this.state.project.fields.thumb.fields.file.url + '?fm=png&q=75&fit=fill&w=' + Math.round(window.devicePixelRatio * 90) + '&h=' + Math.round(window.devicePixelRatio * 36) + ')'
            : ''
        return bg1 + bg2
    }

    renderMD() {
        return { __html: marked(this.state.project.fields.desc, { renderer: renderer })}
    }

    render() {
        return (
            <div>
                <div id="white-bg"></div>
                <div id="work-container">
                    <header>
                        <div className="bg" style={{ backgroundImage: this.getHeaderBg() }}></div>
                        <h1>{this.state.project.fields.title}</h1>
                    </header>
                    <article dangerouslySetInnerHTML={this.renderMD()}></article>
                </div>
            </div>
        );
    }
}

export default WorkPage;
import React, { Component } from 'react';
import './CategoryPage.css';

import ApiCalls from '../ApiCalls';
import WorkListEntry from '../components/WorkListEntry';


class CategoryPage extends Component {
    constructor(props) {
        super(props);
        console.log("initialized");

        this.state = {
            works: []
        }
    }

    componentWillMount() {
        this.updateAndSet();

    }

    updateAndSet() {
        if (this.props.activeCat === this.props.category) {
            console.log("Load content");
            ApiCalls.getProjects(this.props.category, (newState) => {
                this.setState({
                    works: newState.projects
                });
            });
        }
        else {
            console.log("Set Active");
            this.props.setActiveCat(this.props.category);
        }
    }

    componentWillReceiveProps() {
        this.updateAndSet();
    }

    render() {
        const WorkListEntries = this.state.works.map((entry) =>
            <WorkListEntry key={entry.sys.id}
                id={entry.sys.id}
                title={entry.fields.title}
                thumb={entry.fields.thumb}></WorkListEntry>
        );
        const emptyCells = Array.from({ length: this.state.works.length }, (v, k) =>
            <div key={"empty-" + k} className="empty-cells"></div>)
        return (
            <div id="work-list-container">
                <div id="work-list">
                    {WorkListEntries}
                    {emptyCells}
                </div>
            </div>
        );
    }
}

export default CategoryPage;
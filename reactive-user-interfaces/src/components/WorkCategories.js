import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WorkCategories.css';

import ApiCalls from '../ApiCalls'

class WorkCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[]
        }
    }

    componentWillMount() {
        ApiCalls.getCategories((newState) => {
            this.setState({
                categories: newState.categories
            });
        })
    }

    componentWillReceiveProps() {
        console.log("Got Props");
    }

    isActive(category) {
        if (this.props.activeCat) {
            if (category === this.props.activeCat) {
                return true
            } else {
                return false
            }
        } else {
            if (category) {
                return false
            }
            return true
        }
        
    }
    render() {
        console.log("this.props.activeCat: " + this.props.activeCat);
        const categories = this.state.categories.map((category) =>
            <li className="category-item" key={category.sys.id}>
                <Link to={"/category/" + category.sys.id} className={this.isActive(category.sys.id) ? "active" : ""}>{category.fields.title}</Link>
            </li>);
        return (
            <ul id="categories">
                <li className="category-item" style={{ marginBottom: 18 + "px" }} key="all">
                    <Link to="/" className={this.isActive() ? "active" : ""}>All</Link>
                </li>
                {categories}
            </ul>
        );
    }
}

export default WorkCategories;
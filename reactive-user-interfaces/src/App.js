import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import WorkPage from './routes/WorkPage';
import CategoryPage from './routes/CategoryPage';

import WorkCategories from './components/WorkCategories';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCat: ""
        }

        this.setActiveCat = this.setActiveCat.bind(this);
    }
    setActiveCat(category) {
        if (this.state.activeCat !== category) {
            this.setState({
                activeCat: category
            })
        }
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Link to="/">
                        <div id="logo">
                            <img src="/logo.png" alt="LOGO" />
                        </div>
                    </Link>

                    <WorkCategories id="categories" activeCat={this.state.activeCat}></WorkCategories>

                    <div id="router-view-container">
                        <Switch>
                            <Route exact path="/" component={(props) => {
                                console.log(props.match.params.id);
                                return <CategoryPage category="" setActiveCat={this.setActiveCat} activeCat={this.state.activeCat}></CategoryPage>
                            }}></Route>
                            <Route path="/work/:id" component={(props) => {
                                return <WorkPage work={props.match.params.id} setActiveCat={this.setActiveCat} activeCat={this.state.activeCat}></WorkPage>
                            }}></Route>
                            <Route path="/category/:id" component={(props) => {
                                console.log(props.match.params.id);
                                return <CategoryPage category={props.match.params.id} setActiveCat={this.setActiveCat} activeCat={this.state.activeCat}></CategoryPage>
                            }}></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
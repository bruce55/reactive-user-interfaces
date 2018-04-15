import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './routes/HomePage';
import WorkPage from './routes/WorkPage';
import CategoryPage from './routes/CategoryPage'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/work/:id" component={WorkPage}></Route>
                    <Route path="/category/:id" component={CategoryPage}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
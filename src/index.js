import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/home/home';
import Login from './pages/login/login'


ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </Router>
), document.getElementById('root'));
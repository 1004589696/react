import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import About from './home'


class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={About}/>
            </div>
        )
    }
}

ReactDOM.render((
    <Router>
        <App/>
    </Router>
), document.getElementById('root'));

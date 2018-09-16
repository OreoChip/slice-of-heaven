import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../containers/navbar/Navigation'
import App from './App'
import home from './Appcopy';
import home1 from './Appcopy2';
export default class IndexContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router>
        <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/home" component={App} />
          <Route exact path="/link1" component={home} />
          <Route exact path="/link2" component={home1} />
          <Route exact path="/" component={App} />
          <Route exact path="/" component={App} />
        </Switch>
        </div>
      </Router>
    );
  }
}

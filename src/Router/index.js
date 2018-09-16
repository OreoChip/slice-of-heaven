import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from '../containers/index';
import Navbar from '../containers/navbar/Navigation'

export default class IndexRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="*" component={Index} />
        </Switch>
      </Router>
    );
  }
}

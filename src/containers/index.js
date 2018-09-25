import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from 'containers/navbar/Navigation';
import Footer from 'design-system/components/Footer/Footer.jsx';
import indexRoutes from 'routes/index.jsx';

export default class IndexContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route path={prop.path} key={key} component={prop.component} />
              );
            })}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

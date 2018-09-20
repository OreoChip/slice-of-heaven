import React, { Component } from 'react';
import './App.css';

import Badge from 'design-system/components/Badge/Badge';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Badge color={'primary'}>Hello</Badge>
      </div>
    );
  }
}

export default App;

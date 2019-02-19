import React, { Component } from 'react';

import './App.css';

import VariantSearchContainer from './components/VariantSearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <VariantSearchContainer />
        </div>
      </div>
    );
  }
}

export default App;

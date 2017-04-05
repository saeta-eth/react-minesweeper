import React, { Component } from 'react';
import Minesweeper from '../Minesweeper';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="header">
          <h2>Minesweeper Chanllenge</h2>
        </div>
        <Minesweeper />
      </div>
    );
  }
}

export default App;
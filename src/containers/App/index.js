import React, { Component } from 'react';
import './index.css';
import Minesweeper from '../Minesweeper';

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
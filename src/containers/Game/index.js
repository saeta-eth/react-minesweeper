import React, { Component } from 'react';
import Minesweeper from '../Minesweeper';
import Stopwatch from '../Stopwatch';

import './index.css';

class Game extends Component {
  render() {
    return (
      <div className="app-container">
        <Stopwatch />
        <Minesweeper />
      </div>
    );
  }
}

export default Game;
import React, { Component } from 'react';
import Minesweeper from '../Minesweeper';
import Stopwatch from '../Stopwatch';

import GoBack from '../../components/GoBack';

import './index.css';

class Game extends Component {

  render() {
    return (
      <div className="app-container">
        <div className='header-minesweeper'>
          <GoBack 
            href="/"
            text="Go to Menu"
          />
          <Stopwatch action={this.props.match.params.action} />
        </div>
        <Minesweeper />
      </div>
    );
  }
}

export default Game;
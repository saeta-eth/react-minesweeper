import React, { PureComponent } from 'react';
import Minesweeper from '../Minesweeper';
import Stopwatch from '../Stopwatch';

import GoBack from '../../components/GoBack';

class Game extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <GoBack href="/" text="Go to Menu" />
        <Stopwatch action={this.props.match.params.action} />
        <Minesweeper />
      </React.Fragment>
    );
  }
}

export default Game;

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GoBack from '../../components/GoBack';
import Config from '../../components/Config';

import { newGrid } from '../../actions/grid';

import './index.css';

class ConfigGame extends Component {
  constructor() {
    super()
    this.onSelect.bind(this);
  }

  onSelect = (cols, rows, mines, level) => {
    const {
      newGrid
    } = this.props;
    newGrid(cols, rows, mines, level);
    this.props.history.push('/game/new-game');
  }

  render() {
    return (
      <div className='config-minesweeper'>
        <Config 
          onSelect={this.onSelect}
          goBack={<GoBack 
            href="/"
            text="Go to Menu"
          />}
        />
      </div>
    );
  }
}

ConfigGame.propTypes = {
  newGrid: React.PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    newGrid: bindActionCreators(newGrid, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ConfigGame);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MenuOptions from '../../components/MenuOptions';
import { newGrid } from '../../actions/grid';
import { newStopwatch } from '../../actions/stopwatch';
import{ STOPWATCH_INITIAL_VALUE }  from '../../constants';

import './index.css';

class Menu extends Component {
  constructor() {
    super();
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e){
    const {
      history,
      newGrid,
      newStopwatch
    } = this.props;

    const option = e.target.value;

    if (option === 'R') {
      history.push('/game/resume');
    }
    if (option === 'S') {
      newGrid();
      newStopwatch(STOPWATCH_INITIAL_VALUE);
      history.push('/config');
    }
  }

  render() {
    return (
      <div className="menu-container">
        <MenuOptions onSelect={this.onSelect} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newGrid: bindActionCreators(newGrid, dispatch),
    newStopwatch: bindActionCreators(newStopwatch, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Menu);

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MenuOptions from '../../components/MenuOptions';

import { newGrid as newGridAction } from '../../actions/grid';
import { newStopwatch as newStopwatchAction } from '../../actions/stopwatch';

import { STOPWATCH_INITIAL_VALUE } from '../../constants';

class Menu extends PureComponent {
  onSelect = e => {
    const { history, newGrid, newStopwatch } = this.props;
    const option = e.target.value;

    if (option === 'R') {
      history.push('/game/resume');
    }
    if (option === 'S') {
      newGrid();
      newStopwatch(STOPWATCH_INITIAL_VALUE);
      history.push('/config');
    }
  };

  render() {
    return <MenuOptions onSelect={this.onSelect} />;
  }
}

Menu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  newGrid: PropTypes.func.isRequired,
  newStopwatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  newGrid: bindActionCreators(newGridAction, dispatch),
  newStopwatch: bindActionCreators(newStopwatchAction, dispatch),
});

export default connect(
  null,
  mapDispatchToProps
)(Menu);

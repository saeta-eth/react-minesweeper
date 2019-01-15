import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GoBack from '../../components/GoBack';
import Config from '../../components/Config';

import { newGrid as newGridAction } from '../../actions/grid';

class ConfigGame extends Component {
  onSelect = (cols, rows, mines, level) => {
    const { newGrid, history } = this.props;
    newGrid(cols, rows, mines, level);
    history.push('/game/new-game');
  };

  render() {
    return (
      <Config
        onSelect={this.onSelect}
        goBack={<GoBack href="/" text="Go to Menu" />}
      />
    );
  }
}

ConfigGame.propTypes = {
  newGrid: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    newGrid: bindActionCreators(newGridAction, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ConfigGame);

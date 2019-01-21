import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Div100vh from 'react-div-100vh';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { newGrid as newGridAction } from '../../actions/grid';

import Config from '../../components/Config';
import Title from '../../components/Shared/Title';
import Container from '../../components/Shared/Title/Container';
import Footer from '../../components/Footer';

class ConfigGame extends PureComponent {
  onSelect = (cols, rows, mines, level) => {
    const { newGrid, history } = this.props;
    newGrid(cols, rows, mines, level);
    history.push('/game');
  };

  render() {
    return (
      <Div100vh>
        <Container>
          <Title>Minesweeper</Title>
          <Config onSelect={this.onSelect} />
          <Footer />
        </Container>
      </Div100vh>
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

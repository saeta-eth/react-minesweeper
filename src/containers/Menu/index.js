import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Div100vh from 'react-div-100vh';

import MenuOptions from '../../components/MenuOptions';
import Title from '../../components/Shared/Title';
import Container from '../../components/Shared/Title/Container';
import Footer from '../../components/Footer';

class Menu extends PureComponent {
  onSelect = () => {
    const { history } = this.props;
    history.push('/config');
  };

  render() {
    return (
      <Div100vh>
        <Container>
          <Title>Minesweeper</Title>
          <MenuOptions onSelect={this.onSelect} />
          <Footer />
        </Container>
      </Div100vh>
    );
  }
}

Menu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Menu;

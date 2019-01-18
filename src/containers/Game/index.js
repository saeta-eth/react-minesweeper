import React from 'react';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import ReactStopwatch from 'react-stopwatch';
import { connect } from 'react-redux';

import Footer from '../../components/Footer';
import Minesweeper from '../Minesweeper';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;

const StopWatchContainer = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(214, 220, 231);
  margin-bottom: 40px;
  width: 150px;
  text-align: center;
  letter-spacing: 1.5px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

const Game = () => (
  <Div100vh>
    <Container>
      <ReactStopwatch seconds={0} minutes={0} hours={0}>
        {({ formatted }) => (
          <StopWatchContainer>{formatted}</StopWatchContainer>
        )}
      </ReactStopwatch>
      <Minesweeper />
      <Footer />
    </Container>
  </Div100vh>
);

const mapStateToProps = state => ({
  date: state.grid.date,
});

export default connect(
  mapStateToProps,
  null
)(Game);

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Row from '../Row';

const SquareContainer = styled.div`
  display: inherit;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
`;

const Square = ({ rows, cols, grid, handleLeftClick, handleRightClick }) => (
  <SquareContainer>
    {new Array(rows).fill(0).map((cur, row) => (
      <Row
        key={`row-${row}`}
        grid={grid}
        cols={cols}
        row={row}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    ))}
  </SquareContainer>
);

Square.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  grid: PropTypes.instanceOf(Array).isRequired,
  handleLeftClick: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
};

export default Square;

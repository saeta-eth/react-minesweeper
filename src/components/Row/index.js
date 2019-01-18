import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../Cell';

const Row = ({ cols, row, grid, handleLeftClick, handleRightClick }) => (
  <div>
    {new Array(cols).fill(0).map((cur, col) => (
      <Cell
        key={`${row}-${col}`}
        grid={grid}
        row={row}
        col={col}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    ))}
  </div>
);

Row.propTypes = {
  cols: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  grid: PropTypes.instanceOf(Array).isRequired,
  handleLeftClick: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
};

export default Row;

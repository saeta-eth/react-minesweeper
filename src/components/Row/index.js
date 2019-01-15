import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../Cell';

const Row = ({ cols, row, grid, handleClick, handleRightClick }) => (
  <div className="row-mw">
    {new Array(cols).fill(0).map((cur, col) => (
      <Cell
        key={`${row}-${col}`}
        grid={grid}
        row={row}
        col={col}
        handleClick={handleClick}
        handleRightClick={handleRightClick}
      />
    ))}
  </div>
);

Row.propTypes = {
  cols: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  grid: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
};

export default Row;

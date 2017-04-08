import React from 'react';
import Cell from '../Cell';

import './index.css';

const Row = ({ cols, row, grid, handleClick, handleRightClick }) => (
  <div className="row-mw">
    {
      new Array(cols).fill(0).map((cur, col) => {
        return (
          <Cell
            key={`${row}-${col}`}
            grid={grid}
            row={row}
            col={col}
            handleClick={handleClick}
            handleRightClick={handleRightClick}
          />
        );
      })
    }
  </div>
);

export default Row;
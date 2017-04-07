import React from 'react';
import Checkbox from '../Checkbox';

import './index.css';

const Row = ({ cols, row, grid, handleClick, handleRightClick }) => (
  <div className="row-mw">
    {
      new Array(cols).fill(0).map((cur, col) => {
        return (
          <Checkbox
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
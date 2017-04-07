import React from 'react';
import Row from '../Row';

import './index.css';

const Square = ({rows, cols, grid, handleClick, handleRightClick}) => (
  <div className="square-mw">
    {new Array(rows).fill(0).map((cur, row) => {
      return (
        <Row
          key={`row-${row}`}
          grid={grid}
          cols={cols}
          row={row}
          handleClick={handleClick}
          handleRightClick={handleRightClick}
        />
      )
    })}
  </div>
);


export default Square;
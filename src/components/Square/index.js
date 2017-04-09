import React from 'react';
import Col from '../Col';

import './index.css';

const Square = ({rows, cols, grid, handleClick, handleRightClick}) => (
  <div className="square-container">
    {new Array(rows).fill(0).map((cur, row) => {
      return (
        <Col
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
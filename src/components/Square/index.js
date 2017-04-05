import React from 'react';
import Row from '../Row';

import './index.css';

const Square = ({rows, cols}) => (
  <div className="square-mw">
    {new Array(rows).fill(0).map((cur, row) => {
      return (
        <Row
          key={`row-${row}`}
          cols={cols}
          row={row}
        />
      )
    })}
  </div>
);


export default Square;
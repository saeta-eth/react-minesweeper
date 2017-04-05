import React from 'react';
import Checkbox from '../Checkbox';

import './index.css';

const Row = ({ cols, row }) => (
  <div className="row-mw">
    {new Array(cols).fill(0).map((cur, col) => {
      return (
        <Checkbox
          key={`${row}-${col}`}
          row={row}
          col={col}
        />
      );
    })}
  </div>
);

export default Row;
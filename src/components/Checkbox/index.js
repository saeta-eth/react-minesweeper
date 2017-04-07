import React from 'react';
import { checkboxFlow }  from '../../constants'


import './index.css';

const Checkbox = ({ row, col, grid, handleClick, handleRightClick }) => (
  <div 
    className={`checkbox-mw ${grid[row][col] === checkboxFlow.CHECKBOX_PRESSED ? 'isPressed': ''}` }
    onClick={handleClick.bind(this, row, col)}
    onContextMenu={handleRightClick.bind(this, row, col)}
  >
  </div>
);

export default Checkbox;
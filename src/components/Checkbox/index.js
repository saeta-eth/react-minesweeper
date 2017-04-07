import React from 'react';
import { checkboxFlow }  from '../../constants'


import './index.css';

const Checkbox = ({ row, col, grid, handleClick, handleRightClick }) => (
  <div 
    className={`checkbox-mw ${grid[row][col].status === checkboxFlow.CHECKBOX_PRESSED ? 'isPressed': ''}` }
    onClick={handleClick.bind(this, row, col)}
    onContextMenu={handleRightClick.bind(this, row, col)}
  >
    { grid[row][col].visibility ? grid[row][col].status : '' }
  </div>
);

export default Checkbox;
import React from 'react';
import { cellStatus }  from '../../constants'


import './index.css';

const Checkbox = ({ row, col, grid, handleClick, handleRightClick }) => (
  <div 
    className={`checkbox-mw ${grid[row][col].status === cellStatus.CELL_PRESSED  || grid[row][col].visibility ? 'isPressed': ''}` }
    onClick={handleClick.bind(this, row, col)}
    onContextMenu={handleRightClick.bind(this, row, col)}
  >
    { grid[row][col].visibility ? grid[row][col].status : '' }
    { grid[row][col].status === cellStatus.CELL_FLAG || grid[row][col].status === cellStatus.CELL_BOMB_FLAG ? 'F' : ''}
  </div>
);

export default Checkbox;
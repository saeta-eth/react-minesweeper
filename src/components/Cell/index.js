import React from 'react';
import { cellStatus }  from '../../constants';
import ReactEmoji from 'react-emoji';

import './index.css';

const Cell = ({ row, col, grid, handleClick, handleRightClick }) => (
  <div 
    className={`checkbox-mw ${grid[row][col].status === cellStatus.CELL_PRESSED  || grid[row][col].visibility ? 'isPressed': ''}` }
    onClick={handleClick.bind(this, row, col)}
    onContextMenu={handleRightClick.bind(this, row, col)}
  >
    { grid[row][col].visibility  ? grid[row][col].warning : '' }
    { grid[row][col].status === cellStatus.CELL_FLAG || grid[row][col].status === cellStatus.CELL_MINE_FLAG ? ReactEmoji.emojify(':triangular_flag_on_post:') : ''}
  </div>
);

export default Cell;
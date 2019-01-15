import React from 'react';
import PropTypes from 'prop-types';
import ReactEmoji from 'react-emoji';

import { cellStatus } from '../../constants';

const Cell = ({ row, col, grid, handleClick, handleRightClick }) => {
  const isPressed = grid[row][col].status === cellStatus.CELL_PRESSED;
  const isWarning =
    grid[row][col].status === cellStatus.CELL_PRESSED &&
    grid[row][col].warning > 0;
  const isFlag =
    grid[row][col].status === cellStatus.CELL_FLAG ||
    grid[row][col].status === cellStatus.CELL_MINE_FLAG;
  const isQuestion =
    grid[row][col].status === cellStatus.CELL_QUESTION_MARK ||
    grid[row][col].status === cellStatus.CELL_MINE_CELL_QUESTION_MARK;

  return (
    <div
      className={`checkbox-mw ${isPressed ? 'isPressed' : ''}`}
      onClick={handleClick.bind(this, row, col)}
      onContextMenu={handleRightClick.bind(this, row, col)}
    >
      {isWarning ? grid[row][col].warning : ''}
      {isFlag ? ReactEmoji.emojify(':triangular_flag_on_post:') : ''}
      {isQuestion ? ReactEmoji.emojify(':question:') : ''}
    </div>
  );
};

Cell.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  grid: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
};

export default Cell;

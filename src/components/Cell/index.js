import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactEmoji from 'react-emoji';

import { cellStatus } from '../../constants';

const CellItem = styled.div`
  height: 30px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid black;
  background: ${props =>
    props.isPressed
      ? 'linear-gradient(135deg, #FFF7EC 0%, #9E9389 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #BDBDBD 100%)'};
  cursor: ${props => (props.isPressed ? 'default' : 'pointer')};
  color: black;
`;

const Cell = ({ row, col, grid, handleLeftClick, handleRightClick }) => {
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
    <CellItem
      isPressed={isPressed}
      onClick={handleLeftClick.bind(this, row, col)}
      onContextMenu={handleRightClick.bind(this, row, col)}
    >
      {isWarning ? grid[row][col].warning : ''}
      {isFlag ? ReactEmoji.emojify(':triangular_flag_on_post:') : ''}
      {isQuestion ? ReactEmoji.emojify(':question:') : ''}
    </CellItem>
  );
};

Cell.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  grid: PropTypes.instanceOf(Array).isRequired,
  handleLeftClick: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
};

export default Cell;

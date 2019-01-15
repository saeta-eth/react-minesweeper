import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Square from '../../components/Square';

import { newStopwatch as newStopwatchAction } from '../../actions/stopwatch';
import {
  leftClickGrid as leftClickGridAction,
  rightClickGrid as rightClickGridAction,
  newGrid as newGridAction,
} from '../../actions/grid';

import {
  cellStatus,
  STOPWATCH_INITIAL_VALUE,
  COL_INTERMEDIATE,
  ROW_INTERMEDIATE,
  MINES_INTERMEDIATE,
  COL_EXPERT,
  ROW_EXPERT,
  MINES_EXPERT,
} from '../../constants';

class Minesweeper extends Component {
  componentWillReceiveProps(nextProps) {
    this.checkIfIamWinner(nextProps.grid);
  }

  handleRightClick = (col, row, e) => {
    e.preventDefault();
    const { grid, rightClickGrid } = this.props;

    const isPressed = grid[col][row].status === cellStatus.CELL_PRESSED;
    const isInitial = grid[col][row].status === cellStatus.CELL_INITIAL;
    const isMine = grid[col][row].status === cellStatus.CELL_MINE;
    const isFlag = grid[col][row].status === cellStatus.CELL_FLAG;
    const isFlagMine = grid[col][row].status === cellStatus.CELL_MINE_FLAG;
    const isQuestionMark =
      grid[col][row].status === cellStatus.CELL_QUESTION_yMARK;
    const isQuestionMarkMine =
      grid[col][row].status === cellStatus.CELL_MINE_CELL_QUESTION_MARK;

    if (!isPressed) {
      if (isInitial) {
        rightClickGrid(col, row, cellStatus.CELL_FLAG);
      }
      if (isMine) {
        rightClickGrid(col, row, cellStatus.CELL_MINE_FLAG);
      }
      if (isFlag) {
        rightClickGrid(col, row, cellStatus.CELL_QUESTION_MARK);
      }
      if (isFlagMine) {
        rightClickGrid(col, row, cellStatus.CELL_MINE_CELL_QUESTION_MARK);
      }
      if (isQuestionMark) {
        rightClickGrid(col, row, cellStatus.CELL_INITIAL);
      }
      if (isQuestionMarkMine) {
        rightClickGrid(col, row, cellStatus.CELL_MINE);
      }
    }
  };

  handleClick = (col, row) => {
    const {
      cols,
      rows,
      mines,
      level,
      grid,
      leftClickGrid,
      newGrid,
      newStopwatch,
    } = this.props;

    const isInitial = grid[col][row].status === cellStatus.CELL_INITIAL;
    const isMine = grid[col][row].status === cellStatus.CELL_MINE;

    if (isInitial) {
      leftClickGrid(col, row, cellStatus.CELL_PRESSED);
    }

    if (isMine) {
      alert('Game over');
      newGrid(cols, rows, mines, level);
      newStopwatch(STOPWATCH_INITIAL_VALUE);
    }
  };

  checkIfIamWinner = grid => {
    const { rows, cols, level, newGrid, newStopwatch, history } = this.props;

    const TOTAL_CELL = rows * cols;
    const arrayPressed = [];
    const arrayFlagMine = [];

    for (let col in grid) {
      for (let key in grid[col]) {
        if (grid[col][key].status === cellStatus.CELL_PRESSED) {
          arrayPressed.push(grid[col][key].status);
        }
        if (grid[col][key].status === cellStatus.CELL_MINE_FLAG) {
          arrayFlagMine.push(grid[col][key].status);
        }
      }
    }

    const isWinner = arrayPressed.length + arrayFlagMine.length === TOTAL_CELL;

    if (isWinner) {
      alert('You win');
      switch (level) {
        case 'Beginner':
          newGrid(
            COL_INTERMEDIATE,
            ROW_INTERMEDIATE,
            MINES_INTERMEDIATE,
            'Intermediate'
          );
          break;
        case 'Intermediate':
          newGrid(COL_EXPERT, ROW_EXPERT, MINES_EXPERT, 'Expert');
          break;
        case 'Expert':
          history.push('/');
          break;
        default:
          history.push('/');
      }
      newStopwatch(STOPWATCH_INITIAL_VALUE);
    }
  };

  render() {
    const { rows, cols, grid } = this.props;

    return (
      <Square
        grid={grid}
        rows={rows}
        cols={cols}
        handleClick={this.handleClick}
        handleRightClick={this.handleRightClick}
      />
    );
  }
}

Minesweeper.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  mines: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  grid: PropTypes.instanceOf(Array).isRequired,
  leftClickGrid: PropTypes.func.isRequired,
  rightClickGrid: PropTypes.func.isRequired,
  newGrid: PropTypes.func.isRequired,
  newStopwatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  leftClickGrid: bindActionCreators(leftClickGridAction, dispatch),
  rightClickGrid: bindActionCreators(rightClickGridAction, dispatch),
  newGrid: bindActionCreators(newGridAction, dispatch),
  newStopwatch: bindActionCreators(newStopwatchAction, dispatch),
});

const mapStateToProps = state => ({
  rows: state.grid.rows,
  cols: state.grid.cols,
  mines: state.grid.mines,
  level: state.grid.level,
  grid: state.grid.grid,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Minesweeper));

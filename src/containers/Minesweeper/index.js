import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Square from '../../components/Square';

import { leftClickGrid, rightClickGrid, newGrid } from '../../actions/grid';
import { newStopwatch } from '../../actions/stopwatch'
import { 
  cellStatus, STOPWATCH_INITIAL_VALUE,
  COL_INTERMEDIATE, ROW_INTERMEDIATE, MINES_INTERMEDIATE,
  COL_EXPERT, ROW_EXPERT, MINES_EXPERT 
}  from '../../constants';

class Minesweeper extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.checkIfIamWinner(nextProps.grid);
  }

  render() {
    const {
      rows,
      cols,
      grid
    } = this.props;

    return (
      <div>
        <Square
          grid={grid}
          rows={rows} 
          cols={cols}
          handleClick={this.handleClick}
          handleRightClick={this.handleRightClick}
        />
      </div>
    );
  }

  handleRightClick(col, row, e) {
    e.preventDefault();
    const {
      grid,
      rightClickGrid
    } = this.props;

    const isMine = grid[col][row].status === cellStatus.CELL_MINE;
    const isPressed = grid[col][row].status === cellStatus.CELL_PRESSED;
    const isFlag = grid[col][row].status === cellStatus.CELL_FLAG;
    const isFlagMine = grid[col][row].status === cellStatus.CELL_MINE_FLAG;
    
    if (!isPressed) {
      if (!isFlag && !isFlagMine) {
        if (isMine) {
          rightClickGrid(col, row, cellStatus.CELL_MINE_FLAG);
        } else {
          rightClickGrid(col, row, cellStatus.CELL_FLAG);
        }
      } else {
        if (isFlag) {
          rightClickGrid(col, row, cellStatus.CELL_INITIAL);  
        }
        if (isFlagMine) {
          rightClickGrid(col, row, cellStatus.CELL_MINE);  
        }
      }
    }
  }

  checkIfIamWinner(grid) {
    const {
      rows,
      cols,
      level,
      newGrid,
      newStopwatch
    } = this.props;

    const TOTAL_CELL = rows * cols;
    let arrayPressed = [];
    let arrayFlagMine = [];

    for (let col in grid) {
      for (let key in grid[col]) {
        if(grid[col][key].status === cellStatus.CELL_PRESSED || typeof grid[col][key].status === 'number') {
          arrayPressed.push(grid[col][key].status);
        }
        if(grid[col][key].status === cellStatus.CELL_MINE_FLAG) {
          arrayFlagMine.push(grid[col][key].status);
        }
      }
    }

    if ((arrayPressed.length + arrayFlagMine.length) === TOTAL_CELL) {
      alert("You win");
      switch (level) {
        case 'Beginner':
          newGrid(COL_INTERMEDIATE, ROW_INTERMEDIATE, MINES_INTERMEDIATE, 'Intermediate');
          break;
        case 'Intermediate':
          newGrid(COL_EXPERT, ROW_EXPERT, MINES_EXPERT, 'Expert');
          break;
        case 'Expert':
          this.props.history.push('/');
          break
        default:
          this.props.history.push('/');
      }
      newStopwatch(STOPWATCH_INITIAL_VALUE);
    }
  }

  handleClick(col, row) {
    const {
      cols,
      rows,
      mines,
      level,
      grid,
      leftClickGrid,
      newGrid,
      newStopwatch
    } = this.props;

    const isMine = grid[col][row].status === cellStatus.CELL_MINE;
    const isFlag = grid[col][row].status === cellStatus.CELL_FLAG || grid[col][row].status === cellStatus.CELL_MINE_FLAG;

    if (!isFlag) {
      if(isMine){
        alert('Game over');
        newGrid(cols, rows, mines, level);
        newStopwatch(STOPWATCH_INITIAL_VALUE);
      } else {
        if (!grid[col][row].visibility) {
          leftClickGrid(col, row, cellStatus.CELL_PRESSED);
        }
      }
    }
  }
}

Minesweeper.propTypes = {
  rows: React.PropTypes.number.isRequired,
  cols: React.PropTypes.number.isRequired,
  mines: React.PropTypes.number.isRequired,
  level: React.PropTypes.string.isRequired,
  grid: React.PropTypes.array.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    leftClickGrid: bindActionCreators(leftClickGrid, dispatch),
    rightClickGrid: bindActionCreators(rightClickGrid, dispatch),
    newGrid: bindActionCreators(newGrid, dispatch),
    newStopwatch: bindActionCreators(newStopwatch, dispatch)
  };
}

const mapStateToProps = (state) => {
  return {
    rows: state.grid.rows,
    cols: state.grid.cols,
    mines: state.grid.cols,
    level: state.grid.level,
    grid: state.grid.grid
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Minesweeper);

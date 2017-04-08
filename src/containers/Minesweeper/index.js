import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Square from '../../components/Square';

import { leftClickGrid, rightClickGrid, newGrid } from '../../actions/grid';
import { newStopwatch } from '../../actions/stopwatch'
import { cellStatus, STOPWATCH_INITIAL_VALUE }  from '../../constants'

class Minesweeper extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
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
    const isBomb = grid[col][row].status === cellStatus.CELL_BOMB;
    const isPressed = grid[col][row].status === cellStatus.CELL_PRESSED;
    const isFlag = grid[col][row].status === cellStatus.CELL_FLAG;
    const isFlagBomb = grid[col][row].status === cellStatus.CELL_BOMB_FLAG;
    if (!isPressed) {
      if (!isFlag && !isFlagBomb) {
        if (isBomb) {
          rightClickGrid(col, row, cellStatus.CELL_BOMB_FLAG);
        } else {
          rightClickGrid(col, row, cellStatus.CELL_FLAG);
        }
      } else {
        if (isFlag) {
          rightClickGrid(col, row, cellStatus.CELL_INITIAL);  
        }
        if (isFlagBomb) {
          rightClickGrid(col, row, cellStatus.CELL_BOMB);  
        }
      }
    }
  }

  handleClick(col, row) {
    const {
      grid,
      leftClickGrid,
      newGrid,
      newStopwatch
    } = this.props;
    const isBomb = grid[col][row].status === cellStatus.CELL_BOMB;
    const isFlag = grid[col][row].status === cellStatus.CELL_FLAG || grid[col][row].status === cellStatus.CELL_BOMB_FLAG;
    if (!isFlag) {
      if(isBomb){
        alert('Game over');
        newGrid();
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
    rows: state.config.rows,
    cols: state.config.cols,
    grid: state.grid
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Minesweeper);

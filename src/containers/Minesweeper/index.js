import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Square from '../../components/Square';

import { changeGrid } from '../../actions/grid';
import { checkboxFlow }  from '../../constants'


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
      changeGrid
    } = this.props;
    changeGrid(col, row, checkboxFlow.CHECKBOX_FLAG);
  }

  handleClick(col, row) {
    const {
      bomb,
      changeGrid
    } = this.props;
    const isBomb = bomb[col][row];
    if(isBomb){
      alert('Game over');
    } else {
      changeGrid(col, row, checkboxFlow.CHECKBOX_PRESSED);
    }
    
  }
}

Minesweeper.propTypes = {
  rows: React.PropTypes.number.isRequired,
  cols: React.PropTypes.number.isRequired,
  bomb: React.PropTypes.array.isRequired,
  grid: React.PropTypes.array.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    changeGrid : bindActionCreators(changeGrid, dispatch)
  };
}

const mapStateToProps = (state) => {
  return {
    rows: state.config.rows,
    cols: state.config.cols,
    bomb: state.bomb,
    grid: state.grid
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Minesweeper);

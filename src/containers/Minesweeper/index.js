import React, {Component} from 'react';
import { connect } from 'react-redux';
import Square from '../../components/Square';

class Minesweeper extends Component {

  render() {
    const {
      rows,
      cols
    } = this.props;

    return (
      <div>
        <Square 
          rows={rows} 
          cols={cols}
        />
      </div>
    );
  }
}

Minesweeper.propTypes = {
  rows: React.PropTypes.number.isRequired,
  cols: React.PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    rows: state.config.rows,
    cols: state.config.cols,
  }
};


export default connect(mapStateToProps)(Minesweeper);

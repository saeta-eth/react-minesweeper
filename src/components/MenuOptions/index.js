import React from 'react';
import PropTypes from 'prop-types';

const MenuOptions = ({ onSelect }) => (
  <div className="options">
    <button value="R" onClick={onSelect} type="button">
      Resume
    </button>
    <button value="S" onClick={onSelect} type="button">
      Start a new game
    </button>
  </div>
);

MenuOptions.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default MenuOptions;

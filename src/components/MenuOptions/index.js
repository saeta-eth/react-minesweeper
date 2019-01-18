import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Shared/Button';

const MenuOptions = ({ onSelect }) => (
  <div>
    <Button onClick={onSelect} type="button">
      Start
    </Button>
  </div>
);

MenuOptions.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default MenuOptions;

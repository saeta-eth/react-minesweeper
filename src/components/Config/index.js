import React from 'react';
import PropTypes from 'prop-types';

import {
  COL_BEGINNER,
  ROW_BEGINNER,
  MINES_BEGINNER,
  COL_INTERMEDIATE,
  ROW_INTERMEDIATE,
  MINES_INTERMEDIATE,
  COL_EXPERT,
  ROW_EXPERT,
  MINES_EXPERT,
} from '../../constants';

import Button from '../Shared/Button';

const Config = ({ onSelect }) => (
  <div className="options-level">
    <Button
      onClick={onSelect.bind(
        this,
        COL_BEGINNER,
        ROW_BEGINNER,
        MINES_BEGINNER,
        'Beginner'
      )}
      type="button"
    >
      Beginner
    </Button>
    <Button
      onClick={onSelect.bind(
        this,
        COL_INTERMEDIATE,
        ROW_INTERMEDIATE,
        MINES_INTERMEDIATE,
        'Intermediate'
      )}
      type="button"
    >
      Intermediate
    </Button>
    <Button
      onClick={onSelect.bind(
        this,
        COL_EXPERT,
        ROW_EXPERT,
        MINES_EXPERT,
        'Expert'
      )}
      type="button"
    >
      Expert
    </Button>
  </div>
);

Config.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Config;

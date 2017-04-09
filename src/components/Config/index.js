import React from 'react';

import{ 
  COL_BEGINNER, ROW_BEGINNER, MINES_BEGINNER,
  COL_INTERMEDIATE, ROW_INTERMEDIATE, MINES_INTERMEDIATE,
  COL_EXPERT, ROW_EXPERT, MINES_EXPERT 
}  from '../../constants';

import './index.css';

const Config = ({onSelect, goBack}) => (
  <div className="options-level">
    {goBack}
    <button
      onClick={onSelect.bind(this, COL_BEGINNER, ROW_BEGINNER, MINES_BEGINNER, 'Beginner')}
      type="button">
        Beginner
    </button>
    <button
      onClick={onSelect.bind(this, COL_INTERMEDIATE, ROW_INTERMEDIATE, MINES_INTERMEDIATE, 'Intermediate')}
      type="button">
        Intermediate
    </button>
    <button
      onClick={onSelect.bind(this, COL_EXPERT, ROW_EXPERT, MINES_EXPERT, 'Expert')}
      type="button">
        Expert
    </button>
  </div>
);

export default Config;
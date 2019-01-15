import React from 'react';
import PropTypes from 'prop-types';

const TimeElapsed = ({ elapsed }) => (
  <div className="time-elapsed-container">
    <div className="time-elapsed-container-inner">{elapsed}</div>
  </div>
);

TimeElapsed.propTypes = {
  elapsed: PropTypes.string.isRequired,
};

export default TimeElapsed;

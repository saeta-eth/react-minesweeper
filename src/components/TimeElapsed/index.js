import React from 'react';

import './index.css';

const TimeElapsed = ({elapsed}) => (
  <div className="time-elapsed-container">
    <div className="time-elapsed-container-inner">
    {elapsed}
    </div>
  </div>
);


export default TimeElapsed;
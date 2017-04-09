import React from 'react';

import './index.css';


const ConfigOptions = (props) => (
  <div className="options">
    <button 
      value="R"
      onClick={props.onSelect}
      type="button">
        Resume
    </button>
    <button 
      value="S"
      onClick={props.onSelect}
      type="button">
        Start a new game
    </button>
  </div>
);

export default ConfigOptions;
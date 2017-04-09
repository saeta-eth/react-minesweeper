import React from 'react';
import { Link } from 'react-router-dom'

import './index.css';

const GoBack = ({ href, text }) => (
  <div className="go-back">
    <Link to={href} >
      <span>
        {text}
      </span>
    </Link>
  </div>
);


export default GoBack;

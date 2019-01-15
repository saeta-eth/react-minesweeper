import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GoBack = ({ href, text }) => (
  <div className="go-back">
    <Link to={href}>
      <span>{text}</span>
    </Link>
  </div>
);

GoBack.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default GoBack;

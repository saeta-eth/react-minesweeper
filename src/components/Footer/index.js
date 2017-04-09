import React from 'react';
import ReactEmoji from 'react-emoji';

import './index.css';

const Footer = () => (
  <div className="footer">
    <h2 className="title-footer">Made with {ReactEmoji.emojify(':hearts:')} by <a target='_black' href='https://github.com/slorenzo'>Sebastian Lorenzo</a></h2>
  </div>
);

export default Footer;
import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

const Link = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 10px;
  margin-bottom: 5px;
  color: #5c6166;
  &:hover {
    color: #000;
  }
`;

const Footer = () => (
  <Link target="_blank" href="https://github.com/slorenzo/react-minesweeper">
    <Icon glyph="github" />
  </Link>
);

export default Footer;

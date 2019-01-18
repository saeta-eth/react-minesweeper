import { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: rgb(246, 247, 248);
    font-size: 11px;
    ${breakpoint('tablet')`
      font-size: 16px;
    `}
  }
`;

export default GlobalStyle;

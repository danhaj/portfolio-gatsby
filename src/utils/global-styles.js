import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
  }

  body {
    margin: 0;
    padding: 0;
    background: ${colors.dark};
    color: ${colors.primary};
    font-family: 'Raleway';
  }
`;
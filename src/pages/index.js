import React from "react"
import { createGlobalStyle } from 'styled-components';
import "fontsource-raleway";
import "fontsource-montserrat";
import "fontsource-montserrat/700.css";
import { colors } from '../utils/colors';

import SEO from "../components/seo"
import Hero from "../components/hero"

 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${colors.dark};
    color: ${colors.primary};
    font-family: 'Raleway';
  }
`;

const IndexPage = () => (
  <>
    <SEO />
    <GlobalStyle />
    <Hero />
  </>
)

export default IndexPage

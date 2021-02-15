import React from 'react';
import styled from 'styled-components';
import 'fontsource-montserrat';

import SEO from '../components/seo';
import { colors } from '../utils/colors';
import { GlobalStyle } from '../utils/global-styles';
import { Link } from 'gatsby';

const StyledNotFoundPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  color: ${colors.accent};
  font-family: 'Montserrat';
  margin: 0;
`;

const NotFoundPage = () => (
  <StyledNotFoundPage>
    <GlobalStyle />
    <SEO title='404: Not found' />
    <StyledTitle>404: Not Found</StyledTitle>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Link to='/'>Go to Index</Link>
  </StyledNotFoundPage>
);

export default NotFoundPage;

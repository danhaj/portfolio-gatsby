import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import githubIcon from '../images/github.svg';
import githubIconAccent from '../images/github-accent.svg';
import linkedinIcon from '../images/linkedin.svg';
import linkedinIconAccent from '../images/linkedin-accent.svg';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  padding: 30px 0 25px 0;
  border-top: 1px solid ${colors.darkAccent};
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.darkAccent};

  &:hover {
    color: ${colors.accent};
    transition-duration: 400ms;
  }
`;

const StyledIcons = styled.div`
  display: flex;
`;

const StyledIconLink = styled.a`
  margin: 10px 5px;
  width: 30px;
  height: 30px;
  background: url(${({ icon }) => icon});
  background-size: cover;

  &:hover {
    background: url(${({ iconAccent }) => iconAccent});
    background-size: cover;
    transition-duration: 400ms;
  }
`;

const Footer = ({ content }) => (
  <StyledFooter>
    <StyledLink href={`mailto:${content.mail}`}>{content.mail}</StyledLink>
    <StyledIcons>
      <StyledIconLink
        icon={githubIcon}
        iconAccent={githubIconAccent}
        href={content.github}
      ></StyledIconLink>
      <StyledIconLink
        icon={linkedinIcon}
        iconAccent={linkedinIconAccent}
        href={content.linkedin}
      ></StyledIconLink>
    </StyledIcons>
  </StyledFooter>
);

export default Footer;

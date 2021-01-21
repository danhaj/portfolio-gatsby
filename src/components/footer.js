import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import githubIcon from '../images/github.svg';
import githubIconAccent from '../images/github-accent.svg';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    padding: 30px 0 25px 0;
    border-top: 1px solid ${colors.darkAccent}
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: ${colors.darkAccent};

    &:hover {
        color: ${colors.accent};
        transition-duration: 400ms;
    }
`;

const StyledIconLink = styled.a`
    margin-top: 10px;
    width: 30px;
    height: 30px;
    background: url(${githubIcon});
    background-size: cover;

    &:hover {
        background: url(${githubIconAccent});
        background-size: cover;
        transition-duration: 400ms;
    }
`;

const Footer = ({ content }) => (
    <StyledFooter>
        <StyledLink href={`mailto:${content.mail1}`}>{ content.mail1 }</StyledLink>
        <StyledLink href={`mailto:${content.mail2}`}>{ content.mail2 }</StyledLink>
        <StyledIconLink href="https://github.com/danhaj"></StyledIconLink>
    </StyledFooter>
)

export default Footer;
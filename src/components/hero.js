import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import heroImage from '../images/hero.svg';

const StyledHero = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw 0 10vw;
    font-family: 'Montserrat';
`;

const StyledTitle = styled.p`
    font-weight: 900;
    font-size: 4vw;
    margin: 0;

    span {
        color: ${colors.accent};
    }
`;

const StyledSubtitle = styled.p`
    font-weight: 900;
    font-size: 1.5vw;
    margin-bottom: 45px;

    span {
        color: ${colors.accent};
    }
`;

const StyledImage = styled.img`
    width: 60%;
`;

const StyledButton = styled.a`
    background: none;
    font-family: 'Montserrat';
    font-size: 13px;
    color: ${colors.accent};
    text-decoration: none;
    border: 1px solid ${colors.accent};
    padding: 15px 25px;
    cursor: pointer;

    &:hover {
        background: ${colors.accent};
        color: ${colors.primary};
        transition-duration: 400ms;
    }
`;

const Hero = ({ content }) => (
    <StyledHero id="hero">
        <div>
            <StyledTitle>
                <span>{ content.greetings }</span>
                <br />
                { content.title }
            </StyledTitle>
            <StyledSubtitle>
                <span>#</span> { content.subtitle }
            </StyledSubtitle>
            <StyledButton href="#about">
                { content.buttonText }
            </StyledButton>
        </div>
        <StyledImage src={heroImage} />
    </StyledHero>
);

export default Hero;
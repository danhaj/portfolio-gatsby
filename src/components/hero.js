import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { heroInitialAnimation, heroScrollAnimation } from '../utils/animations';
import heroImage from '../images/hero.svg';

const StyledHero = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw 0 10vw;
    font-family: 'Montserrat';
`;

const StyledGreetings = styled.p`
    font-weight: 900;
    font-size: 4vw;
    color: ${colors.accent};
    margin: 0;
`;

const StyledTitle = styled.p`
    font-weight: 900;
    font-size: 4vw;
    margin: 0;
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


const Hero = ({ content }) => {
    const greetings = useRef();
    const title = useRef();
    const subtitle = useRef();
    const button = useRef();
    const image = useRef();

    useEffect(() => {
        heroInitialAnimation(greetings, title, subtitle, button, image);
        heroScrollAnimation(image);
    });

    return (
        <StyledHero id="hero">
            <div>
                <StyledGreetings ref={greetings}>
                    { content.greetings }
                </StyledGreetings>
                <StyledTitle ref={title}>
                    { content.title }
                </StyledTitle>
                <StyledSubtitle ref={subtitle}>
                    <span>#</span> { content.subtitle }
                </StyledSubtitle>
                <StyledButton ref={button} href="#about">
                    { content.buttonText }
                </StyledButton>
            </div>
            <StyledImage ref={image} src={heroImage} />
        </StyledHero>
    );
}

export default Hero;
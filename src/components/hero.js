import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { heroInitialAnimation, heroScrollAnimation } from '../utils/animations';
import heroImage from '../images/hero.svg';

const StyledHero = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw 0 10vw;
    font-family: 'Montserrat';

    @media (max-width: 1150px) {
        text-align: center;
        padding: 0 5vw;
    }
`;

const StyledGreetings = styled.p`
    font-weight: 900;
    font-size: 4vw;
    color: ${colors.accent};
    margin: 0;

    @media (max-width: 1150px) {
        font-size: 12vw;
    }
`;

const StyledTitle = styled.p`
    font-weight: 900;
    font-size: 4vw;
    margin: 0;

    @media (max-width: 1150px) {
        font-size: 10vw;
    }
`;

const StyledSubtitle = styled.p`
    font-weight: 900;
    font-size: 1.5vw;
    margin-bottom: 45px;

    span {
        color: ${colors.accent};
    }

    @media (max-width: 1150px) {
        font-size: 4vw;
        margin: 15px 0 25px 0;
    }
`;

const StyledImage = styled.img`
    width: 60%;

    @media (max-width: 1150px) {
        display: none;
    }
`;

const StyledButton = styled.button`
    background: none;
    font-family: 'Montserrat';
    font-size: 13px;
    color: ${colors.accent};
    border: 1px solid ${colors.accent};
    padding: 15px 30px;
    cursor: pointer;

    &:hover {
        background: ${colors.accent};
        color: ${colors.primary};
        transition-duration: 400ms;
    }

    @media (max-width: 1150px) {
        font-size: 3vw;
        padding: 15px 45px;
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

    const handleClick = () => {
        const element = document.querySelector("#about");
        element.scrollIntoView({ behavior: 'smooth' });
    }

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
                <StyledButton ref={button} onClick={handleClick}>
                    { content.buttonText }
                </StyledButton>
            </div>
            <StyledImage ref={image} src={heroImage} />
        </StyledHero>
    );
}

export default Hero;
import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

import HeroImage from './hero-image';

const StyledHero = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw 0 10vw;
`;

const StyledText = styled.p`
    font-family: 'Montserrat';
    font-weight: 900;
    font-size: 4vw;

    span {
        color: ${colors.accent};
    }
`;

const StyledImageContainer = styled.div`
    width: 80%;
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

const Hero = () => (
    <StyledHero>
        <div>
            <StyledText>
                <span>Hello! 👋</span>
                <br />
                My name
                is Daniel.
            </StyledText>
            <StyledButton href="#about">
                About me        
            </StyledButton>
        </div>
        <StyledImageContainer>
            <HeroImage />
        </StyledImageContainer>
    </StyledHero>
);

export default Hero;
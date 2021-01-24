import React, { useEffect, useRef } from 'react';
import Img from "gatsby-image"
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { aboutScrollAnimation } from '../utils/animations';

const StyledAbout = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 10vw;

    @media (max-width: 1150px) {
        flex-direction: column;
        height: auto;
        min-height: 100vh;
    }
`;

const StyledTextContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1150px) {
        width: 90%;
        text-align: center;
    }
`;

const StyledTitle = styled.p`
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 3vw;
    color: ${colors.accent};
    margin: 0;

    @media (max-width: 1150px) {
        font-size: 10vw;
    }
`;

const StyledText = styled.p`
    margin-bottom: 0;
    font-size: 1.3vw;

    @media (max-width: 1150px) {
        font-size: 3.5vw;
    }
`;

const StyledImageContainer = styled.div`
    width: 25%;
    padding: 10px;
    border: 1px solid ${colors.darkAccent};

    @media (max-width: 1150px) {
        width: 70%;
        padding: 5px;
        margin-top: 2vh;
    }
`;

const About = ({ content, imageFluid }) => {
    const title = useRef();
    const paragraph1 = useRef();
    const paragraph2 = useRef();
    const image = useRef();

    useEffect(() => {
        aboutScrollAnimation(title, paragraph1, paragraph2, image);
    });

    return (
        <StyledAbout id="about">
            <StyledTextContainer>
                <StyledTitle ref={title}>
                    About me
                </StyledTitle>
                <StyledText ref={paragraph1}>
                    { content.about1 }
                </StyledText>
                <StyledText ref={paragraph2}>
                    { content.about2 }
                </StyledText>
            </StyledTextContainer>
            <StyledImageContainer ref={image}>
                <Img fluid={imageFluid} />
            </StyledImageContainer> 
        </StyledAbout>
    );
}

export default About;
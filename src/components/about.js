import React from 'react';
import Img from "gatsby-image"
import styled from 'styled-components';
import { colors } from '../utils/colors';

const StyledAbout = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 0 10vw;
`;

const StyledTextContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledTitle = styled.p`
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 3vw;
    color: ${colors.accent};
    margin-bottom: 0;
`;

const StyledText = styled.p`
    margin-bottom: 0;
    font-size: 1.3vw;
`;

const StyledImage = styled(Img)`
    width: 25%;
    border: 1px solid ${colors.darkAccent};
`;

const About = ({ content, image }) => (
    <StyledAbout id="about">
        <StyledTextContainer>
            <StyledTitle>
                About me
            </StyledTitle>
            <StyledText>
                { content.about1 }
            </StyledText>
            <StyledText>
                { content.about2 }
            </StyledText>
        </StyledTextContainer>
        <StyledImage fluid={image} />
    </StyledAbout>
);

export default About;
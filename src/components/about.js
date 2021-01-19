import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import AboutImg from '../images/about.jpg';

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

const StyledImage = styled.img`
    max-width: 30%;
    max-height: auto;
    padding: 10px;
    border: 1px solid ${colors.darkAccent};
`;

const About = () => (
    <StyledAbout id="about">
        <StyledTextContainer>
            <StyledTitle>
                About me
            </StyledTitle>
            <StyledText>
                My name is Daniel and I’m 20 years old. I have been learning programming and different technologies for few years. 
                Mainly I’m involved in frontend but I’m also interested in mobile applications.
            </StyledText>
            <StyledText>
                Currently I'm studying Computer Science (on weekends) and I would like to start working full-time as a 
                <b> junior frontend developer</b>. 
            </StyledText>
        </StyledTextContainer>
        <StyledImage src={AboutImg} />
    </StyledAbout>
);

export default About;
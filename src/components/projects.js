import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

import Project from './project';

const StyledProjects = styled.section`
    width: 100%;
    text-align: center;
    padding-top: 100px;
`;

const StyledTitle = styled.p`
    font-family: 'Montserrat';
    font-weight: bold;
    font-size: 3vw;
    color: ${colors.accent};
    margin-top: 0;
    margin-bottom: 25px;
`;

const StyledProjectsContainer = styled.section`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: repeat(3, 150px); 
    column-gap: 20px;
    row-gap: 20px;
`;

const Projects = ({ projects }) => (
    <StyledProjects id="projects">
        <StyledTitle>Projects</StyledTitle>
        <StyledProjectsContainer>
            { projects.map(item => <Project item={item} />) }
        </StyledProjectsContainer>
    </StyledProjects>
);
  
export default Projects;
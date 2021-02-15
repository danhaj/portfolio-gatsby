import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { projectsScrollAnimation } from '../utils/animations';
import { colors } from '../utils/colors';
import { media } from '../utils/media';

import Project from './project';

const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  ${media.phone`
    height: auto;
    margin: 10vh 0;
  `}
`;

const StyledTitle = styled.p`
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 3vw;
  color: ${colors.accent};
  margin-top: 0;
  margin-bottom: 25px;

  ${media.phone`
    font-size: 10vw;
  `}

  ${media.tablet`
    font-size: 6vw;
  `}
`;

const StyledProjectsContainer = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(2, 150px);
  column-gap: 20px;
  row-gap: 20px;

  ${media.phone`
    grid-template-columns: 90vw; 
    grid-template-rows: auto;
  `}

  ${media.tablet`
    grid-template-columns: 40vw 40vw;
    grid-template-rows: auto; 
  `}
`;

const Projects = ({ projects }) => {
  const title = useRef();
  const projectsContainer = useRef();

  useEffect(() => {
    projectsScrollAnimation(title, projectsContainer);
  });

  return (
    <StyledProjects id='projects'>
      <StyledTitle ref={title}>Projects</StyledTitle>
      <StyledProjectsContainer ref={projectsContainer}>
        {projects.map(item => (
          <Project key={item.name} item={item} />
        ))}
      </StyledProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;

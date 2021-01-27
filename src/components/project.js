import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const StyledProject = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 150px;
    padding: 0 10px;
    border: 1px solid ${colors.darkAccent};
    border-radius: 10px;
    text-decoration: none;

    &:hover {
        border-color: ${colors.accent};
        transition-duration: 400ms;
    }
`;

const StyledName = styled.p`
    color: ${colors.accent};
    margin: 0;
`;

const StyledDescription = styled.p`
    color: ${colors.primary};
    margin: 0;
`;

const Project = ({ item }) => (
    <StyledProject href={item.url}>
        <StyledName>
            { item.name }
        </StyledName>
        <StyledDescription>
            { item.description }
        </StyledDescription>
    </StyledProject>
)

export default Project;
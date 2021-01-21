import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const StyledProject = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.darkAccent};
    border-radius: 10px;
    text-decoration: none;
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
    <StyledProject to={item.url}>
        <StyledName>
            { item.name }
        </StyledName>
        <StyledDescription>
            { item.description }
        </StyledDescription>
    </StyledProject>
)

export default Project;
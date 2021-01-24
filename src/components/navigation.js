import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { navigationInitialAnimation } from '../utils/animations';
import { colors } from '../utils/colors';

const StyledNav = styled.nav`
    position: fixed;
    left: 30px;
    top: 47vh;
    z-index: 1;

    @media (max-width: 1150px) {
        display: none;
    }
`;

const StyledNavLink = styled.div`
    width: 10px;
    height: 10px;
    margin: 8px 0;
    border-radius: 5px;
    background-color: ${colors.darkAccent};
    cursor: pointer;
`;

const Navigation = ({ items }) => {
    const navigation = useRef();

    useEffect(() => {
        navigationInitialAnimation(navigation);
    });

    const handleClick = item => {
        const element = document.getElementById(item);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <StyledNav ref={navigation}>
            { items.map(item => <StyledNavLink key={item} className={item} onClick={() => handleClick(item)} />) }
        </StyledNav>
    )
};

export default Navigation;
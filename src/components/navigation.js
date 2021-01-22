import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const StyledNav = styled.nav`
    position: fixed;
    right: 30px;
    top: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 1;
`;

const StyledNavLink = styled.div`
    width: 10px;
    height: 10px;
    margin: 5px 0;
    border-radius: 5px;
    background-color: ${colors.darkAccent};
    cursor: pointer;
`;

const Navigation = ({ items }) => {
    const handleClick = item => {
        const element = document.getElementById(item);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <StyledNav>
            { items.map(item => <StyledNavLink key={item} className={item} onClick={() => handleClick(item)} />) }
        </StyledNav>
    )
};

export default Navigation;
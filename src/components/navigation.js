import { Link } from 'gatsby';
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
`;

const StyledNavLink = styled(Link)`
    display: block;
    width: 10px;
    height: 10px;
    margin: 5px 0;
    border-radius: 5px;
    background-color: ${colors.darkAccent};
    cursor: pointer;
`;

const Navigation = ({ items }) => (
    <StyledNav>
        { items.map(item => <StyledNavLink key={item} className={item} to={`#${item}`} />) }
    </StyledNav>
);

export default Navigation;
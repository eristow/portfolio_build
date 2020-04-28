/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';

import HeaderLink from './HeaderLink';

const NavBar = styled.div`
  text-align: center;
`;

function Header() {
  return (
    <NavBar>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/resume">Resume</HeaderLink>
      <HeaderLink to="/stuff">Stuff</HeaderLink>
      <HeaderLink to="/links">Links</HeaderLink>
    </NavBar>
  );
}

Header.propTypes = {};

export default Header;

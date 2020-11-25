/**
 *
 * Header
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeaderLink from './HeaderLink';
import MenuButton from './MenuButton';

const NavBar = styled.div`
  text-align: center;
  border-bottom: solid darkgray 1px;
  background: #2d2d2d;
  display: flex;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <NavBar>
        <MenuButton
          shouldHaveMarginLeft
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </NavBar>
    );
  }

  return (
    <NavBar>
      <HeaderLink to="/" style={{ marginLeft: 'auto' }}>
        Home
      </HeaderLink>
      {/* <HeaderLink to="/resume">Resume</HeaderLink> */}
      <HeaderLink to="/work">Work</HeaderLink>
      {/* <HeaderLink to="/links">Links</HeaderLink> */}
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavBar>
  );
}

Header.propTypes = {};

export default Header;

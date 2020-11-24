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
  border-bottom: solid white 2px;
  background: #222222;
  display: flex;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(true);

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

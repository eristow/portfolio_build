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

const Title = styled.h1`
  margin: 3px;
  margin-left: 8px;
  padding: 5px;
  text-decoration: none;
  color: #121212;
  background: #86fcbb;
  border-radius: 5px;
`;
const NavBar = styled.div`
  text-align: center;
  border-bottom: solid darkgray 1px;
  background: #2d2d2d;
`;
const NavContainer = styled.div`
  max-width: calc(768px + 16px * 2);
  display: flex;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
const ButtonsContainer = styled.div`
  margin-left: auto;
  text-align: center;
  display: flex;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  }
`;

function Buttons() {
  return (
    <>
      <HeaderLink to="/" style={{ marginLeft: 'auto' }}>
        Home
      </HeaderLink>
      {/* <HeaderLink to="/resume">Resume</HeaderLink> */}
      <HeaderLink to="/work">Work</HeaderLink>
      {/* <HeaderLink to="/links">Links</HeaderLink> */}
    </>
  );
}

function HeaderContent() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <MenuButton shouldHaveMarginLeft isOpen={isOpen} setIsOpen={setIsOpen} />
    );
  }
  return (
    <ButtonsContainer>
      {window.matchMedia('(max-width: 768px)').matches ? (
        <>
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <Buttons />
        </>
      ) : (
        <>
          <Buttons />
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      )}
    </ButtonsContainer>
  );
}

function Header() {
  return (
    <NavBar>
      <NavContainer>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Title>Evan Ristow's Portfolio</Title>
        <HeaderContent />
      </NavContainer>
    </NavBar>
  );
}

Header.propTypes = {};

export default Header;

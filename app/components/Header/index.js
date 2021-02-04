/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import HeaderLink from './HeaderLink';
// import MenuButton from './MenuButton';

const Title = styled.h1`
  margin: 0px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 5px;
  text-decoration: none;
  color: #03dac6;
  // background: #86fcbb;
  border-radius: 5px;
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
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
  margin-right: auto;
  text-align: center;
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  }
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const EmptyContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

function Buttons() {
  return (
    <ButtonsContainer>
      <HeaderLink to="/">
        <MdArrowBack /> Back
      </HeaderLink>
      {/* <HeaderLink to="/resume">Resume</HeaderLink> */}
      {/* <HeaderLink to="/work">Work</HeaderLink> */}
      {/* <HeaderLink to="/links">Links</HeaderLink> */}
    </ButtonsContainer>
  );
}

function Header({ showBackButton = false }) {
  return (
    <NavBar>
      <NavContainer>
        {showBackButton ? <Buttons /> : <EmptyContainer />}
        <TextContainer>
          <Link style={{ marginLeft: 'auto', marginRight: 'auto' }} to="/">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Title>Evan Ristow's Portfolio</Title>
          </Link>
        </TextContainer>
        <EmptyContainer />
      </NavContainer>
    </NavBar>
  );
}

Header.propTypes = {
  showBackButton: PropTypes.bool,
};

export default Header;

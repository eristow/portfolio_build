/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';

import Button from 'components/Button';
import Work from 'containers/Work/Loadable';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 480px) {
    display: block;
  }
`;

const InfoContainer = styled.div`
  margin-bottom: 40px;
`;

export default function HomePage() {
  return (
    <>
      <InfoContainer>
        <h1>My Info</h1>
        <ButtonContainer>
          <Button type="button" margin="0px 10px 0px 0px">
            <a href="https://www.linkedin.com/in/evan-ristow-1a2477102/">
              <FaLinkedin /> LinkedIn
            </a>
          </Button>
          <Button type="button" margin="0px 10px">
            <a href="https://drive.google.com/file/d/1EYDbyOl885N6W-pFKmJajZMro66dCL1D/view?usp=sharing">
              <IoDocumentTextOutline /> Resume
            </a>
          </Button>
        </ButtonContainer>
      </InfoContainer>
      <Work />
    </>
  );
}

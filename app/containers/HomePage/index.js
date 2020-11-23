/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function HomePage() {
  return (
    <div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>Evan Ristow's Portfolio</h1>
      <ButtonContainer>
        <Button type="button">
          <a href="https://www.linkedin.com/in/evan-ristow-1a2477102/">
            LinkedIn
          </a>
        </Button>
        <Button type="button" margin="0px 10px">
          <a href="https://drive.google.com/file/d/1EYDbyOl885N6W-pFKmJajZMro66dCL1D/view?usp=sharing">
            Resume
          </a>
        </Button>
      </ButtonContainer>
    </div>
  );
}

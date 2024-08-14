/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header';
import HomePage from 'containers/HomePage/Loadable';
// import Stocks from 'containers/Stocks/Loadable';
// import Radio from 'containers/Radio/Loadable';
// import TicTacToe from 'containers/TicTacToe/Loadable';
// import RecipeCalculator from 'containers/RecipeCalculator/Loadable';
// import Resume from 'containers/Resume/Loadable';
// import Links from 'containers/Links/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import emotionIsPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return emotionIsPropValid(propName);
  }

  // For other elements, forward all props
  return true;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <Header showBackButton={location.pathname !== '/'} />
        <AppWrapper>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {/* <Route exact path="/stocks" element={<Stocks />} /> */}
            {/* <Route exact path="/radio" element={<Radio />} /> */}
            {/* <Route exact path="/tictactoe" element={<TicTacToe />} /> */}
            {/* <Route exact path="/recipe" element={<RecipeCalculator />} /> */}
            {/* <Route exact path="/resume" element={<Resume />} /> */}
            {/* <Route exact path="/work" element={<Work />} /> */}
            {/* <Route exact path="/links" element={<Links />} /> */}
            {/* <Route element={<NotFoundPage />} /> */}
          </Routes>
          <GlobalStyle />
        </AppWrapper>
      </StyleSheetManager>
    </>
  );
}

/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header';
import HomePage from 'containers/HomePage/Loadable';
// import Resume from 'containers/Resume/Loadable';
import Work from 'containers/Work/Loadable';
// import Links from 'containers/Links/Loadable';
import Stocks from 'containers/Stocks/Loadable';
import Radio from 'containers/Radio/Loadable';
import TicTacToe from 'containers/TicTacToe/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/resume" component={Resume} /> */}
        <Route exact path="/work" component={Work} />
        {/* <Route exact path="/links" component={Links} /> */}
        <Route exact path="/stocks" component={Stocks} />
        <Route exact path="/radio" component={Radio} />
        <Route exact path="/tictactoe" component={TicTacToe} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

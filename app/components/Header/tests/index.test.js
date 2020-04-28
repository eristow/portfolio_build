/**
 *
 * Tests for Header
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createMemoryHistory } from 'history';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import configureStore from '../../../configureStore';
import Header from '../index';

describe('<Header />', () => {
  let history;
  let store;

  beforeAll(() => {
    history = createMemoryHistory();
    store = configureStore({}, history);
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
        </ConnectedRouter>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
        </ConnectedRouter>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});

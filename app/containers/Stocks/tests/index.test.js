/**
 *
 * Tests for Stocks
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Stocks, { compute } from '../index';

describe('<Stocks />', () => {
  let store;

  beforeAll(() => {
    store = configureStore();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Stocks dispatch={dispatch} />
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <Stocks />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('compute() should return the correct value', () => {
    const testNum = 79.87;
    const testMult = 0.85;
    const expectedVal = 67.89;

    expect(compute(testNum, testMult)).toBe(expectedVal);
  });
});

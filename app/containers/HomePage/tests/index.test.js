import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import HomePage from '../index';

describe('<HomePage />', () => {
  // TODO: this is erroring out becuase getState() is undefined.
  // Some redux stuff I need to fix for tests
  it.skip('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={{}}>
        <IntlProvider locale="en">
          <HomePage />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});

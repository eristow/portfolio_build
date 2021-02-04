import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import App from '../index';

const renderer = new ShallowRenderer();

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    const history = createMemoryHistory();
    renderer.render(
      <Router history={history}>
        <App />
      </Router>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

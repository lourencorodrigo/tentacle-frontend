import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';

import DotLoader from './';

describe('dotloader component', () => {
  const dotloader = <DotLoader />;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(dotloader, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should compare the component with a snapshot', () => {
    const component = ReactTestRenderer.create(dotloader);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

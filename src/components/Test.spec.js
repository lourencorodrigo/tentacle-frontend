import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Test from './Test';

describe('TEST COMPONENT', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Test />);
  });

  it('+++ should compare the text in h1.', () => {
    expect(
      wrapper
        .find('h1')
        .render()
        .text()
    ).toEqual('Component Test');
  });

  it('+++ should compare the component with a snapshot', () => {
    const component = ReactTestRenderer.create(<Test />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

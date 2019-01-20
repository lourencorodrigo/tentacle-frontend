import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Button from './';

describe('button component', () => {
  let wrapper;
  const button = <Button>Test</Button>;

  beforeEach(() => {
    wrapper = mount(button);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(button, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should compare the text.', () => {
    expect(
      wrapper
        .find('button')
        .render()
        .text()
    ).toEqual('Test');
  });

  it('should compare the component with a snapshot', () => {
    const component = ReactTestRenderer.create(button);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

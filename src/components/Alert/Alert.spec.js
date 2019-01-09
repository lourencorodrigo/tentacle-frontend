import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Alert from './';

describe('alert component', () => {
  let wrapper;
  const alert = (
    <Alert type="success">
      <span id="test">Test</span>
    </Alert>
  );

  beforeEach(() => {
    wrapper = mount(alert);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(alert, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should compare the text.', () => {
    expect(
      wrapper
        .find('#test')
        .render()
        .text()
    ).toEqual('Test');
  });

  it('should compare the component with a snapshot', () => {
    const component = ReactTestRenderer.create(alert);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

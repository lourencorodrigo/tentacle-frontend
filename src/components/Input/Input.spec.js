import React from 'react';
import ReactDOM from 'react-dom';

import Input from './';

describe('input component', () => {
  const form = (
    <Input
      placeholder="placeholder"
      name="input-name"
      id="input-id"
      error={false}
      warning={false}
      type="text"
    />
  );

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(form, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';

import FormGroup from './';

describe('formgroup component', () => {
  const form = (
    <FormGroup>
      <div>Test</div>
    </FormGroup>
  );

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(form, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

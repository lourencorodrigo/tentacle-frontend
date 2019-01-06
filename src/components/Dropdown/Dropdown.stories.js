import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { dark } from '../../styles/themes';
import Dropdown, { Option } from './Dropdown';

storiesOf('Dropdown', module)
  .addDecorator(story => (
    <ThemeProvider theme={dark}>
      <div style={{ background: '#bcbcbc', padding: '20px' }}>{story()}</div>
    </ThemeProvider>
  ))
  .add('default', () => (
    <Dropdown isBlock>
      <Option value="volvo">Volvo</Option>
      <Option value="saab">Saab</Option>
      <Option value="mercedes">Mercedes</Option>
      <Option value="audi">Audi</Option>
    </Dropdown>
  ));

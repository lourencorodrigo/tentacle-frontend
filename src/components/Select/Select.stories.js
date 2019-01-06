import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { dark } from '../../styles/themes';
import Select, { Option } from './Select';

storiesOf('Select', module)
  .addDecorator(story => (
    <ThemeProvider theme={dark}>
      <div style={{ background: '#bcbcbc', padding: '20px' }}>{story()}</div>
    </ThemeProvider>
  ))
  .add('default', () => (
    <Select isBlock>
      <Option value="volvo">Volvo</Option>
      <Option value="saab">Saab</Option>
      <Option value="mercedes">Mercedes</Option>
      <Option value="audi">Audi</Option>
    </Select>
  ));

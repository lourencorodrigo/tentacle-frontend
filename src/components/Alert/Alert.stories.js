import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { dark } from '../../styles/themes';

import Alert from './Alert';

storiesOf('Alert', module)
  .addDecorator(story => <ThemeProvider theme={dark}>{story()}</ThemeProvider>)
  .add('success', () => <Alert type="success">Test Success</Alert>);

storiesOf('Alert', module)
  .addDecorator(story => <ThemeProvider theme={dark}>{story()}</ThemeProvider>)
  .add('info', () => <Alert type="info">Test Info</Alert>);

storiesOf('Alert', module)
  .addDecorator(story => <ThemeProvider theme={dark}>{story()}</ThemeProvider>)
  .add('warning', () => <Alert type="warning">Test Warning</Alert>);

storiesOf('Alert', module)
  .addDecorator(story => <ThemeProvider theme={dark}>{story()}</ThemeProvider>)
  .add('danger', () => <Alert type="danger">Test Danger</Alert>);

import React from 'react';
import { storiesOf } from '@storybook/react';

import Alert from './Alert';

storiesOf('Alert', module).add('success', () => (
  <Alert type="success">Test Success</Alert>
));

storiesOf('Alert', module).add('info', () => (
  <Alert type="info">Test Info</Alert>
));

storiesOf('Alert', module).add('warning', () => (
  <Alert type="warning">Test Warning</Alert>
));

storiesOf('Alert', module).add('danger', () => (
  <Alert type="danger">Test Danger</Alert>
));

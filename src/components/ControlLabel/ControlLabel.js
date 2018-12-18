import React from 'react';

import { Label } from './styles';

const ControlLabel = ({ children, id }) => (
  <Label htmlFor={id}>{children}</Label>
);

export default ControlLabel;

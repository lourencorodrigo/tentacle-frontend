import React from 'react';
import PropTypes from 'prop-types';

import { Label } from './styles';

const ControlLabel = ({ children, id }) => (
  <Label htmlFor={id}>{children}</Label>
);

ControlLabel.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string
};

export default ControlLabel;

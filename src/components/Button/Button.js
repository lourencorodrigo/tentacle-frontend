import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Button = ({ children, type, disabled }) => (
  <Wrapper type={type} disabled={disabled}>
    {children}
  </Wrapper>
);

Button.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Button;

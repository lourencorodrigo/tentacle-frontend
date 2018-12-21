import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Button = ({ children, type, disabled }) => (
  <Wrapper type={type} disabled={disabled}>
    {children}
  </Wrapper>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;

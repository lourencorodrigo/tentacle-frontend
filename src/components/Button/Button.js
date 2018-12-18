import React from 'react';

import { Wrapper } from './styles';

const Button = ({ children, type, disabled }) => (
  <Wrapper type={type} disabled={disabled}>
    {children}
  </Wrapper>
);

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from './styles';

const Input = ({
  autoComplete,
  input,
  type,
  id,
  placeholder,
  name,
  autoFocus,
  error,
  warning,
  disabled
}) => (
  <InputWrapper
    {...input}
    placeholder={placeholder}
    autoComplete={autoComplete}
    name={name}
    id={id}
    error={error}
    warning={warning}
    type={type}
    autoFocus={autoFocus}
    disabled={disabled}
  />
);

Input.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  warning: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Input;

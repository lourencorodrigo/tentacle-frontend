import React from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from './styles';

const Input = ({
  input,
  type,
  id,
  placeholder,
  name,
  autoFocus,
  error,
  warning
}) => (
  <>
    <InputWrapper
      {...input}
      placeholder={placeholder}
      name={name}
      id={id}
      error={error}
      warning={warning}
      type={type}
      autoFocus={autoFocus}
    />
  </>
);

Input.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autoFocus: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  onClick: PropTypes.func
};

export default Input;

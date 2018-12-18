import React from 'react';

import { InputWrapper } from './styles';

const InputForm = ({
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

export default InputForm;

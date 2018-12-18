import React from 'react';
import { FormattedMessage } from 'react-intl';

import Input from '../../components/Input';
import ControlLabel from '../../components/ControlLabel';
import { Error, WrapperLabel } from './styles';

const InputGroup = ({
  input,
  placeholder,
  name,
  id,
  type,
  autoFocus,
  textLabel,
  meta: { touched, error, warning }
}) => (
  <>
    <WrapperLabel>
      <ControlLabel id={id}>{textLabel}</ControlLabel>
    </WrapperLabel>
    <Input
      input={input}
      placeholder={placeholder}
      name={name}
      id={id}
      error={touched && error}
      warning={touched && warning}
      type={type}
      autoFocus={autoFocus}
    />
    {touched &&
      (error && (
        <Error>
          <FormattedMessage id={error.id} values={error.values} />
        </Error>
      ))}
  </>
);

export default InputGroup;

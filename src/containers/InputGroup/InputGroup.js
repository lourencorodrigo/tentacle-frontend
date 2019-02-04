import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Input from '../../components/Input';
import ControlLabel from '../../components/ControlLabel';
import { Error, WrapperLabel } from './styles';

const InputGroup = ({
  autoComplete,
  input,
  placeholder,
  name,
  id,
  type,
  autoFocus,
  textLabel,
  disabled,
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
      autoComplete={autoComplete}
      disabled={disabled}
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

InputGroup.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autoFocus: PropTypes.bool,
  onClick: PropTypes.func,
  textLabel: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired
  ]),
  meta: PropTypes.object,
  disabled: PropTypes.bool
};

export default InputGroup;

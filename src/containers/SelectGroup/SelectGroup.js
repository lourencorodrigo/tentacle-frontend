import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Select from '../../components/Select';
import ControlLabel from '../../components/ControlLabel';
import { Error, WrapperLabel } from './styles';

const SelectGroup = ({
  input,
  name,
  id,
  autoFocus,
  disabled,
  loading,
  textLabel,
  children,
  meta: { touched, error, warning }
}) => (
  <>
    <WrapperLabel>
      <ControlLabel id={id}>{textLabel}</ControlLabel>
    </WrapperLabel>
    <Select
      input={input}
      disabled={disabled}
      name={name}
      id={id}
      error={touched && error}
      warning={touched && warning}
      autoFocus={autoFocus}
      loading={loading}
    >
      ${children}
    </Select>
    {touched &&
      (error && (
        <Error>
          <FormattedMessage id={error.id} values={error.values} />
        </Error>
      ))}
  </>
);

SelectGroup.propTypes = {
  input: PropTypes.object,
  children: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string,
  autoFocus: PropTypes.bool,
  onClick: PropTypes.func,
  textLabel: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired
  ]),
  meta: PropTypes.object
};

export default SelectGroup;

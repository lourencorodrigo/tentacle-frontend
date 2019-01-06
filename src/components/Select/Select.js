/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import { SelectWrapper, OptionWrapper } from './styles';

const Select = ({
  isBlock,
  input,
  error,
  warning,
  children,
  id,
  name,
  autoFocus
}) => (
  <SelectWrapper
    {...input}
    error={error}
    warning={warning}
    id={id}
    name={name}
    isBlock={isBlock}
    autoFocus={autoFocus}
  >
    ${children}
  </SelectWrapper>
);

export const Option = ({ children, value }) => (
  <OptionWrapper value={value}>{children}</OptionWrapper>
);

Select.propTypes = {
  isBlock: PropTypes.bool,
  children: PropTypes.array.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  input: PropTypes.object,
  autoFocus: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  warning: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

Option.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.string
};

Select.defaultProps = {
  isBlock: false,
  autoFocus: false,
  error: false,
  warning: false
};

export default Select;

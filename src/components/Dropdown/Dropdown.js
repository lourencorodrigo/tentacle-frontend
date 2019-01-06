import React from 'react';
import PropTypes from 'prop-types';

import { SelectWrapper, OptionWrapper } from './styles';

const Dropdown = ({
  isBlock,
  input,
  error,
  warning,
  children,
  id,
  autoFocus
}) => (
  <SelectWrapper
    {...input}
    error={error}
    warning={warning}
    id={id}
    isBlock={isBlock}
    autoFocus={autoFocus}
  >
    ${children}
  </SelectWrapper>
);

export const Option = ({ children, value }) => (
  <OptionWrapper value={value}>{children}</OptionWrapper>
);

Dropdown.propTypes = {
  isBlock: PropTypes.bool,
  children: PropTypes.element.isRequired,
  id: PropTypes.string,
  input: PropTypes.object,
  autoFocus: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  warning: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

Option.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

Dropdown.defaultProps = {
  isBlock: false,
  autoFocus: false,
  error: false,
  warning: false
};

export default Dropdown;

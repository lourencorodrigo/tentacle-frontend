import React from 'react';
import PropTypes from 'prop-types';

import { AlertWrapper, Close, Span } from './styles';

const Alert = ({ children, onClick, type }) => {
  return (
    <AlertWrapper type={type}>
      {children}
      <Close
        onClick={onClick}
        type="button"
        data-dismiss="alert"
        aria-label="Close"
      >
        <Span aria-hidden="true">&times;</Span>
      </Close>
    </AlertWrapper>
  );
};

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired
  ]),
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default Alert;

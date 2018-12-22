import React from 'react';
import PropTypes from 'prop-types';

import { AlertWrapper, Close, Span } from './styles';

const Alert = ({ children, type }) => {
  return (
    <AlertWrapper type={type}>
      {children}
      <Close type="button" data-dismiss="alert" aria-label="Close">
        <Span aria-hidden="true">&times;</Span>
      </Close>
    </AlertWrapper>
  );
};

Alert.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string
};

export default Alert;

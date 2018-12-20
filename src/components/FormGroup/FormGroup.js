import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const FormGroup = ({ children }) => <Wrapper>{children}</Wrapper>;

FormGroup.propTypes = {
  children: PropTypes.element.isRequired
};

export default FormGroup;

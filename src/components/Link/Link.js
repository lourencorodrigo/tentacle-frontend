import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Link = ({ children, to }) => <Wrapper to={to}>{children}</Wrapper>;

Link.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired
};

export default Link;

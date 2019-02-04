import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const NavBrand = ({ children }) => <Wrapper>{children}</Wrapper>;

NavBrand.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default NavBrand;

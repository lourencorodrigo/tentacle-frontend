import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './styles';
import NavBrand from '../NavBrand';

const Navbar = ({ children }) => <Header>{children}</Header>;

Navbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

Navbar.Brand = NavBrand;

export default Navbar;

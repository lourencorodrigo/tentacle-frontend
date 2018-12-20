import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { dark, light } from '../../styles/themes';

const themes = {
  dark,
  light
};

class ThemeProvider extends React.Component {
  render() {
    const { theme } = this.props;
    return (
      <ThemeProviderStyled theme={themes[theme]}>
        {this.props.children}
      </ThemeProviderStyled>
    );
  }
}

ThemeProvider.propTypes = {
  theme: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default ThemeProvider;

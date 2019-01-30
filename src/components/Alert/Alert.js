import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Container } from './styles';

const Alert = ({ color, onClick, children }) => (
  <>
    {true && (
      <Wrapper color={color} onClick={onClick}>
        <Container>
          <Title color={color}>{children}</Title>
        </Container>
      </Wrapper>
    )}
  </>
);

Alert.defaultProps = {
  color: 'success'
};

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired
  ]),
  color: PropTypes.oneOf(['success', 'info', 'danger', 'warning']),
  onClick: PropTypes.func
};

export default Alert;

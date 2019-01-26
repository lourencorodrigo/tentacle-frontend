import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Container, Button, Span } from './styles';

const Alert = ({ color, onClick, children, isClickFull }) => (
  <>
    {true && (
      <Wrapper color={color} onClick={isClickFull ? onClick : () => null}>
        <Container>
          <Title color={color}>{children}</Title>
        </Container>
        <Button
          onClick={!isClickFull ? onClick : () => null}
          type="button"
          data-dismiss="alert"
          aria-label="Close"
        >
          <Span aria-hidden="true">&times;</Span>
        </Button>
      </Wrapper>
    )}
  </>
);

Alert.defaultProps = {
  color: 'success',
  isClickFull: false
};

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired
  ]),
  color: PropTypes.oneOf(['success', 'info', 'danger', 'warning']),
  onClick: PropTypes.func,
  isClickFull: PropTypes.bool
};

export default Alert;

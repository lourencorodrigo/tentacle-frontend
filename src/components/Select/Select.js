import React from 'react';
import PropTypes from 'prop-types';

import { SelectWrapper, OptionWrapper, Container } from './styles';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  handlerOnFocus(event) {
    this.setState({ focus: true });
    return this.props.input.onFocus(event);
  }

  handlerOnBlur(event) {
    this.setState({ focus: false });
    return this.props.input.onBlur(event);
  }

  render() {
    const {
      isBlock,
      input,
      error,
      warning,
      children,
      disabled,
      loading,
      id,
      name,
      autoFocus
    } = this.props;
    const { focus } = this.state;
    return (
      <Container
        loading={loading}
        focus={focus}
        error={error}
        warning={warning}
        disabled={disabled}
      >
        <SelectWrapper
          {...input}
          onFocus={this.handlerOnFocus.bind(this)}
          onBlur={this.handlerOnBlur.bind(this)}
          disabled={disabled}
          id={id}
          name={name}
          isBlock={isBlock}
          autoFocus={autoFocus}
        >
          ${children}
        </SelectWrapper>
      </Container>
    );
  }
}

export const Option = ({ children, value }) => (
  <OptionWrapper value={value}>{children}</OptionWrapper>
);

Select.propTypes = {
  isBlock: PropTypes.bool,
  children: PropTypes.array.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  autoFocus: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  warning: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

Option.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.string
};

Select.defaultProps = {
  isBlock: false,
  autoFocus: false,
  error: false,
  loading: false,
  warning: false
};

export default Select;

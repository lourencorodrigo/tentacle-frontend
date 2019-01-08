import React from 'react';
import PropTypes from 'prop-types';

import RegisterForm from './RegisterForm';
import Link from '../../../components/Link';
import { WrapperLinks } from '../styles';
import { FormattedMessage } from 'react-intl';
import { path } from '../../../Router';

class Register extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  componentDidMount() {
    this.props.getStates();
  }

  render() {
    // eslint-disable-next-line
    const { data } = this.props.stateState;
    return (
      <>
        <RegisterForm states={data} onSubmit={this.onSubmit.bind(this)} />
        <WrapperLinks>
          <Link to={path.AUTH_LOGIN}>
            <FormattedMessage id="register.have_an_account" />
          </Link>
        </WrapperLinks>
      </>
    );
  }
}

Register.propTypes = {
  getStates: PropTypes.func
};

export default Register;

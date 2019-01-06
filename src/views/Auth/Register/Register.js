import React from 'react';

import RegisterForm from './RegisterForm';
import Link from '../../../components/Link';
import { WrapperLinks } from '../styles';
import { FormattedMessage } from 'react-intl';
import { path } from '../../../Router';

class Register extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <>
        <RegisterForm onSubmit={this.onSubmit.bind(this)} />
        <WrapperLinks>
          <Link to={path.AUTH_LOGIN}>
            <FormattedMessage id="register.have_an_account" />
          </Link>
        </WrapperLinks>
      </>
    );
  }
}

export default Register;

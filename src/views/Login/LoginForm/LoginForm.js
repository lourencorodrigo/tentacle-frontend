/* eslint-disable */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { Wrapper, Form, Title, Description, ContentLinks } from './styles';
import InputGroup from '../../../containers/InputGroup';
import FormGroup from '../../../components/FormGroup';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import DotLoader from '../../../components/DotLoader';
import { required, email, minLength } from '../../../utils/validators';

const minLength5 = minLength(5);

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const { invalid, handleSubmit, loading } = this.props;
    return (
      <Wrapper>
        <Title>
          <FormattedMessage id="login.hello_again" />
        </Title>
        <Description>
          <FormattedMessage id="login.sign_in_to_see" />
        </Description>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Field
              name="email"
              id="email"
              type="email"
              autoFocus
              textLabel={<FormattedMessage id="login.email" />}
              component={InputGroup}
              validate={[email, required]}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="password"
              id="password"
              type="password"
              textLabel={<FormattedMessage id="login.password" />}
              component={InputGroup}
              validate={[minLength5, required]}
            />
          </FormGroup>
          <Button type="submit" disabled={invalid || loading}>
            {!loading ? <FormattedMessage id="login.login" /> : <DotLoader />}
          </Button>
        </Form>
        <ContentLinks>
          <Link to="/recovery-password">
            <FormattedMessage id="login.forgot_your_password" />
          </Link>
          <Link to="/rigister">
            <FormattedMessage id="login.register_account" />
          </Link>
        </ContentLinks>
      </Wrapper>
    );
  }
}

LoginForm.propTypes = {
  invalid: PropTypes.bool,
  loading: PropTypes.bool
};

export default reduxForm({
  form: 'login'
})(LoginForm);

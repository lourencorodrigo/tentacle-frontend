import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { Wrapper, Form, Title, Description, ContentLinks } from './styles';
import InputGroup from '../../../containers/InputGroup';
import FormGroup from '../../../components/FormGroup';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import { required, email, minLength } from '../../../utils/validators';

const minLength5 = minLength(5);

class LoginForm extends React.Component {
  render() {
    const { invalid } = this.props;
    return (
      <Wrapper>
        <Title>
          <FormattedMessage id="LOGIN_HELLO_AGAIN" />
        </Title>
        <Description>
          <FormattedMessage id="LOGIN_SIGN_IN_TO_SEE_THE_NEW_GAMES_ADDED" />
        </Description>
        <Form>
          <FormGroup>
            <Field
              name="email"
              id="email"
              type="email"
              autoFocus
              textLabel={<FormattedMessage id="LOGIN_EMAIL" />}
              component={InputGroup}
              validate={[email, required]}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="password"
              id="password"
              type="password"
              textLabel={<FormattedMessage id="LOGIN_PASSWORD" />}
              component={InputGroup}
              validate={[minLength5, required]}
            />
          </FormGroup>
          <Button type="submit" disabled={invalid}>
            <FormattedMessage id="LOGIN_LOGIN" />
          </Button>
        </Form>
        <ContentLinks>
          <Link to="/recovery-password">
            <FormattedMessage id="LOGIN_FORGOT_YOUR_PASSWORD" />
          </Link>
          <Link to="/rigister">
            <FormattedMessage id="LOGIN_REGISTER_ACCOUNT" />
          </Link>
        </ContentLinks>
      </Wrapper>
    );
  }
}

LoginForm.propTypes = {
  invalid: PropTypes.bool
};

export default reduxForm({
  form: 'login'
})(LoginForm);

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { Title, Description, Form } from '../../styles';
import InputGroup from '../../../../containers/InputGroup';
import FormGroup from '../../../../components/FormGroup';
import Button from '../../../../components/Button';
import DotLoader from '../../../../components/DotLoader';
import { required, email, minLength } from '../../../../utils/validators';

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
      <>
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
      </>
    );
  }
}

LoginForm.propTypes = {
  invalid: PropTypes.bool,
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'login'
})(LoginForm);

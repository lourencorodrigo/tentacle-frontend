import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';

import { CityStateWrapper } from './styles';
import { Title, Form } from '../../styles';
import FormGroup from '../../../../components/FormGroup';
import InputGroup from '../../../../containers/InputGroup';
import {
  required,
  email,
  minLength,
  maxLength
} from '../../../../utils/validators';

const minLength5 = minLength(5);
const maxLength2 = maxLength(2);

class RegisterForm extends React.Component {
  render() {
    return (
      <>
        <Title>Criar uma conta</Title>
        <Form>
          <FormGroup>
            <Field
              name="email"
              id="email"
              type="email"
              autoFocus
              textLabel={<FormattedMessage id="login.email" />}
              component={InputGroup}
              validate={[required, email]}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="username"
              id="username"
              type="text"
              textLabel={<FormattedMessage id="register.username" />}
              component={InputGroup}
              validate={[required]}
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
          <FormGroup>
            <Field
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              textLabel={<FormattedMessage id="register.confirmPassword" />}
              component={InputGroup}
              validate={[minLength5, required]}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="phone"
              id="phone"
              type="text"
              textLabel={<FormattedMessage id="register.phone" />}
              component={InputGroup}
              validate={[required]}
            />
          </FormGroup>
          <CityStateWrapper>
            <FormGroup>
              <Field
                name="state"
                id="state"
                type="text"
                textLabel={<FormattedMessage id="register.state" />}
                component={InputGroup}
                validate={[required, maxLength2]}
              />
            </FormGroup>
            <FormGroup>
              <Field
                name="city"
                id="city"
                type="text"
                textLabel={<FormattedMessage id="register.phone" />}
                component={InputGroup}
                validate={[required]}
              />
            </FormGroup>
          </CityStateWrapper>
        </Form>
      </>
    );
  }
}

export default reduxForm({
  form: 'register'
})(RegisterForm);

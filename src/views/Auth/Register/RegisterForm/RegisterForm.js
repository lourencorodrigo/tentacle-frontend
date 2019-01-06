import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { CityStateWrapper, StateWrapper } from './styles';
import { Title, Form } from '../../styles';
import FormGroup from '../../../../components/FormGroup';
import { Option } from '../../../../components/Select';
import Button from '../../../../components/Button';
import InputGroup from '../../../../containers/InputGroup';
import SelectGroup from '../../../../containers/SelectGroup';
import {
  required,
  email,
  minLength,
  onlyLowercaseAndNumber
} from '../../../../utils/validators';
import DotLoader from '../../../../components/DotLoader';

const minLength5 = minLength(5);

class RegisterForm extends React.Component {
  render() {
    const { invalid, loading, handleSubmit } = this.props;
    return (
      <>
        <Title>Criar uma conta</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Field
              name="email"
              id="email"
              type="email"
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
              validate={[required, onlyLowercaseAndNumber]}
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
              name="phone"
              id="phone"
              type="text"
              textLabel={<FormattedMessage id="register.phone" />}
              component={InputGroup}
              validate={[required]}
            />
          </FormGroup>
          <CityStateWrapper>
            <StateWrapper>
              <FormGroup>
                <Field
                  id="state"
                  name="state"
                  textLabel={<FormattedMessage id="register.state" />}
                  component={SelectGroup}
                  validate={[required]}
                >
                  <Option />
                  <Option value="teste1">PE</Option>
                  <Option value="teste2">SP</Option>
                </Field>
              </FormGroup>
            </StateWrapper>
            <FormGroup>
              <Field
                id="city"
                name="city"
                textLabel={<FormattedMessage id="register.city" />}
                component={SelectGroup}
                validate={[required]}
              >
                <Option />
                <Option value="teste1">São Lourenço da Mata</Option>
                <Option value="teste2">Recife</Option>
              </Field>
            </FormGroup>
          </CityStateWrapper>
          <Button type="submit" disabled={invalid || loading}>
            {!loading ? (
              <FormattedMessage id="register.create_account" />
            ) : (
              <DotLoader />
            )}
          </Button>
        </Form>
      </>
    );
  }
}

RegisterForm.propTypes = {
  invalid: PropTypes.bool,
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'register'
})(RegisterForm);

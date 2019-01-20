import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { CityStateWrapper, StateWrapper, CityWrapper } from './styles';
import { Title, Form } from '../../styles';
import FormGroup from '../../../../components/FormGroup';
import { Option } from '../../../../components/Select';
import Button from '../../../../components/Button';
import InputGroup from '../../../../containers/InputGroup';
import SelectGroup from '../../../../containers/SelectGroup';
import { phone as normalizePhone } from '../../../../utils/normalize';
import {
  required,
  email,
  minLength,
  phone,
  onlyLowercaseAndNumber
} from '../../../../utils/validators';
import DotLoader from '../../../../components/DotLoader';
// import store from '../../../../store';

const minLength5 = minLength(5);

// const asyncValidateCity = values => {
//   return new Promise(resolve => {
//     store.dispatch(CityAction.getCities(values.state));
//     resolve();
//   });
// };

class RegisterForm extends React.Component {
  rendererTextCreateAccountWithLoader() {
    const { loading } = this.props;
    const textButton = <FormattedMessage id="register.create_account" />;
    const loaderButton = <DotLoader />;
    return !loading ? textButton : loaderButton;
  }

  componentDidUpdate() {
    const { cities, cityValue } = this.props;
    if (cities.indexOf(cityValue) === -1) {
      this.props.change('city', null);
    }
  }

  render() {
    const {
      invalid,
      loading,
      handleSubmit,
      states,
      loadingState,
      loadingCity,
      cities,
      onChangeState
    } = this.props;
    return (
      <>
        <Title>
          <FormattedMessage id="register.create_an_account" />
        </Title>
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
              type="tel"
              textLabel={<FormattedMessage id="register.phone" />}
              component={InputGroup}
              validate={[required, phone]}
              normalize={normalizePhone}
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
                  loading={loadingState}
                  disabled={loadingState || states.length === 0}
                  validate={[required]}
                  onChange={onChangeState}
                >
                  <Option />
                  {states.map(state => (
                    <Option key={state._id} value={state._id}>
                      {state.name}
                    </Option>
                  ))}
                </Field>
              </FormGroup>
            </StateWrapper>
            <CityWrapper>
              <FormGroup>
                <Field
                  id="city"
                  name="city"
                  textLabel={<FormattedMessage id="register.city" />}
                  component={SelectGroup}
                  loading={loadingCity}
                  disabled={loadingCity || cities.length === 0}
                  validate={[required]}
                >
                  <Option />
                  {cities.map((city, index) => (
                    <Option key={index} value={city}>
                      {city}
                    </Option>
                  ))}
                </Field>
              </FormGroup>
            </CityWrapper>
          </CityStateWrapper>
          <Button type="submit" disabled={invalid || loading}>
            {this.rendererTextCreateAccountWithLoader()}
          </Button>
        </Form>
      </>
    );
  }
}

RegisterForm.defaultProps = {
  states: [],
  cities: []
};

RegisterForm.propTypes = {
  invalid: PropTypes.bool,
  loading: PropTypes.bool,
  loadingState: PropTypes.bool,
  loadingCity: PropTypes.bool,
  handleSubmit: PropTypes.func,
  states: PropTypes.array,
  cities: PropTypes.array,
  change: PropTypes.func,
  cityValue: PropTypes.string,
  onChangeState: PropTypes.func
};

const registerFormReduxForm = reduxForm({
  form: 'register',
  // asyncValidate: asyncValidateCity,
  asyncBlurFields: ['state']
})(RegisterForm);

const selector = formValueSelector('register');
const registerFormConnect = connect(state => {
  const cityValue = selector(state, 'city');
  return {
    cityValue
  };
})(registerFormReduxForm);

export default registerFormConnect;

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

  onChangeState(event) {
    const idCity = event.target.value;
    if (idCity) this.props.getCities(idCity);
  }

  render() {
    const { stateState, cityState } = this.props;
    console.log(cityState);
    return (
      <>
        <RegisterForm
          states={stateState.payload}
          cities={cityState.payload}
          loadingState={stateState.loading}
          loadingCity={stateState.loading}
          onSubmit={this.onSubmit.bind(this)}
          onChangeState={this.onChangeState.bind(this)}
        />
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
  getStates: PropTypes.func,
  getCities: PropTypes.func,
  stateState: PropTypes.object,
  cityState: PropTypes.object
};

export default Register;

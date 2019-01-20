import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';

import RegisterForm from './RegisterForm';
import Link from '../../../components/Link';
import { WrapperLinks } from '../styles';
import { path } from '../../../Router';
import { isUserLogged } from '../../../services/authService';

class Register extends React.Component {
  componentDidUpdate() {
    const { isLoading, isError, errors } = this.props.userState;
    this.showAlertError(isLoading, isError, errors);
    this.redirectToHome(isError);
  }

  componentDidMount() {
    this.getStates();
  }

  getStates() {
    const { stateState } = this.props;
    const stateLength = stateState.payload.length;
    if (stateLength === 0) {
      this.props.getStates();
    }
  }

  redirectToHome(isError) {
    if (isUserLogged() && !isError) this.props.history.push(path.HOME);
  }

  showAlertError(isLoading, isError, errors) {
    if (!isLoading && isError) {
      errors.map(message => toast.error(<FormattedMessage id={message} />));
    }
  }

  onSubmit(user) {
    this.props.createUser(user);
  }

  onChangeState(event) {
    const idCity = event.target.value;
    if (idCity) this.props.getCities(idCity);
  }

  render() {
    const { stateState, cityState, userState } = this.props;
    return (
      <>
        <RegisterForm
          states={stateState.payload}
          cities={cityState.payload}
          loadingState={stateState.loading}
          loadingCity={cityState.loading}
          loadingRegister={userState.isLoading}
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
  getStates: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired,
  stateState: PropTypes.object.isRequired,
  cityState: PropTypes.object.isRequired,
  createUser: PropTypes.func.isRequired,
  userState: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Register;

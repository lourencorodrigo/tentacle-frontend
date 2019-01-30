import * as AlertActions from '../../actions/alert';
import store from '../../store';

const setMessageError = message => ({ message });

const badRequest = response => ({
  error: setMessageError('error.bad_request'),
  messages: response.data.message
});

const unauthorized = () => {
  return { error: setMessageError('error.unauthorized') };
};

const forbidden = () => {
  sessionStorage.removeItem('userInfo');
  document.location.pathname = '/';
  return { error: setMessageError('error.forbidden') };
};

const internalServer = () => {
  const message = 'error.internal_server';
  store.dispatch(AlertActions.showAlert(message, 'danger'));
};

const networkError = () => {
  const message = 'error.network';
  store.dispatch(AlertActions.showAlert(message, 'danger'));
};

const statusReaction = {
  400: badRequest,
  401: unauthorized,
  403: forbidden,
  500: internalServer
};

const errorHandler = error => {
  // Validate if network available
  if (error.message === 'Network Error') {
    networkError();
    throw 'error';
  }

  const { status } = error.response;
  throw error.response &&
    status &&
    statusReaction[status] &&
    statusReaction[status](error.response);
};

const requestWrapper = fn => (...args) =>
  Promise.resolve(fn(...args)).catch(errorHandler);

export default requestWrapper;

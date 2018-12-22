const setMessage = message => ({ message });

const badRequest = () => ({ error: setMessage('error.bad_request') });

const forbidden = () => {
  sessionStorage.removeItem('userInfo');
  document.location.pathname = '/';
  return { error: setMessage('error.forbidden') };
};

const unauthorized = () => ({ error: setMessage('error.unauthorized') });

const statusReaction = {
  400: badRequest,
  401: unauthorized,
  403: forbidden
};

/* eslint-disable */
const errorHandler = defaultReturn => error => {
  const statusCode = error.response.status;
  throw error.response &&
    statusCode &&
    statusReaction[statusCode] &&
    statusReaction[statusCode]();
};
/* eslint-enable */

const requestWrapper = (fn, defaultReturn) => (...args) =>
  Promise.resolve(fn(...args)).catch(errorHandler(defaultReturn));

export default requestWrapper;

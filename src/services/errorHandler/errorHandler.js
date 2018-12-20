const logoutUser = () => {
  sessionStorage.removeItem('userInfo');
  document.location.pathname = '/';
};

const statusReaction = {
  403: logoutUser
  /**
   * other custom handlers
   */
};

/* eslint-disable */
const errorHandler = defaultReturn => error => {
  console.error('Service layer error', error);
  /* eslint-enable */
  error.response &&
    error.response.status &&
    statusReaction[error.response.status] &&
    statusReaction[error.response.status]();
};

const requestWrapper = (fn, defaultReturn) => (...args) =>
  Promise.resolve(fn(...args)).catch(errorHandler(defaultReturn));

export default requestWrapper;

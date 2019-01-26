import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './store';
import GlobalStyle from './styles/fonts';
import * as AlertActions from './actions/alert';

import './assets/vendor/reset.css';
import './assets/vendor/fonts.css';
import 'react-toastify/dist/ReactToastify.css';
import { ALERT_SERVICE_WORKER } from './utils/constants';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  rootElement
);

const onUpdate = () => {
  store.dispatch(
    AlertActions.showAlert(
      'serviceWorker.new_update_available',
      ALERT_SERVICE_WORKER
    )
  );
};

const config = {
  onUpdate
};

serviceWorker.register(config);

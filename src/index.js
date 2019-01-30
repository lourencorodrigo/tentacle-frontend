import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './store';
import GlobalStyle from './styles/fonts';
import * as ServiceWorkerActions from './actions/serviceWorker';

import './assets/vendor/reset.css';
import './assets/vendor/fonts.css';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  rootElement
);

const onUpdate = () => {
  store.dispatch(ServiceWorkerActions.updatedServiceWorker());
};

const config = {
  onUpdate
};

serviceWorker.register(config);

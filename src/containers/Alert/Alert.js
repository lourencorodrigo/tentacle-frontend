/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Alert from '../../components/Alert';
import { ALERT_SERVICE_WORKER } from '../../utils/constants';

const reloadPage = () => {
  window.location.reload(true);
};

const selectAlert = (title, id) => {
  switch (id) {
    case ALERT_SERVICE_WORKER:
      return (
        <Alert isClickFull={true} onClick={reloadPage} color="success">
          <FormattedMessage id={title} />
        </Alert>
      );
    default:
      return <Alert color="danger">{title}</Alert>;
  }
};

const renderAlert = (show, title, id) => (show ? selectAlert(title, id) : null);

const AlertContainer = ({ alertState }) =>
  renderAlert(...Object.values(alertState));

AlertContainer.propTypes = {
  alertState: PropTypes.object
};

export default AlertContainer;

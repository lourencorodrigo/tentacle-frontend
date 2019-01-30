import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Alert from '../../components/Alert';

class ServiceWorker extends React.Component {
  reloadPage() {
    window.location.reload();
  }

  render() {
    const {
      serviceWorkerState: { updated }
    } = this.props;
    return (
      <>
        {updated && (
          <Alert onClick={this.reloadPage.bind(this)} color="success">
            <FormattedMessage id="serviceWorker.new_update_available" />
          </Alert>
        )}
      </>
    );
  }
}

ServiceWorker.propTypes = {
  serviceWorkerState: PropTypes.object
};

export default ServiceWorker;

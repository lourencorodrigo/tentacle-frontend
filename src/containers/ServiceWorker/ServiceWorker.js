import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Wrapper, Title } from './styles';

class ServiceWorker extends React.Component {
  reloadPage() {
    window.location.reload(true);
  }

  render() {
    const { isUpdate } = this.props.serviceWorkerState;
    return (
      <>
        {isUpdate && (
          <Wrapper onClick={this.reloadPage.bind(this)}>
            <Title>
              <FormattedMessage id="serviceWorker.new_update_available" />
            </Title>
          </Wrapper>
        )}
      </>
    );
  }
}

ServiceWorker.propTypes = {
  serviceWorkerState: PropTypes.object
};

export default ServiceWorker;

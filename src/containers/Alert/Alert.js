import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Alert from '../../components/Alert';

class AlertContainer extends React.Component {
  closeAlert() {
    this.props.closeAlert();
  }

  renderAlert() {
    const {
      alertState: { title, color }
    } = this.props;
    const isI18n = this.checkIfTitleIsI18n(title);
    const elementTitle = isI18n ? <FormattedMessage id={title} /> : title;
    return (
      <Alert onClick={this.closeAlert.bind(this)} color={color}>
        {elementTitle}
      </Alert>
    );
  }

  checkIfTitleIsI18n(title) {
    const regex = /^[a-z/._]*$/g;
    return regex.test(title);
  }

  render() {
    const { alertState } = this.props;
    return <>{alertState.show ? this.renderAlert() : null}</>;
  }
}

AlertContainer.propTypes = {
  alertState: PropTypes.object,
  closeAlert: PropTypes.func
};

export default AlertContainer;

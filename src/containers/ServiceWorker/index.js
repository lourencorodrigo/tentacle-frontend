import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ServiceWorker from './ServiceWorker';
import * as ServiceWorkerAction from '../../containers/ServiceWorker';

const mapStateToProps = state => ({
  serviceWorkerState: state.serviceWorkerState
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ServiceWorkerAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceWorker);

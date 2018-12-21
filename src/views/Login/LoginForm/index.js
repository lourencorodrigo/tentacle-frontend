import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from './LoginForm';
import * as AuthAction from '../../../actions/auth';

const mapStateToProps = state => ({
  businessClientState: state.businessClientState,
  legalOpinionState: state.legalOpinionState
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Register from './Register';

const mapStateToProps = state => ({
  authState: state.authState
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

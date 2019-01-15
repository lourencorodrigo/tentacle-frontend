import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Register from './Register';
import * as StateAction from '../../../actions/state';
import * as CityAction from '../../../actions/city';

const mapStateToProps = state => ({
  stateState: state.stateState,
  cityState: state.cityState
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, StateAction, CityAction), dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

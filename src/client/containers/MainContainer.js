import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Main from '../components/Main';
import * as actionCreators from '../actions/auth';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(state => state.sessions, mapDispatchToProps)(Main);

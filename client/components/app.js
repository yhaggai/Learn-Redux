import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import *  as actionCreators from '../actions/action_creators';
import Main from './Main';


function mapStateToProps(state){
  return {
    posts: state.posts,
    commnets: state.comments
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

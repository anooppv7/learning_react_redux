import { connect } from 'react-redux';
import { onIncrement, onDecrement } from './redux'
import App from './App';

const mapStateToProps = state => ({
    data: state,
  });

const mapDispatchToProps = {
    onIncrement,
    onDecrement
  };

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  
export default AppContainer;
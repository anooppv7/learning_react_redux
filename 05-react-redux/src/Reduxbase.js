import { createStore } from "redux";
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const Reduxbase = function() {

  // #1
  const reducer = function (state = 0, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };

  // #2
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  window.store = store;

  // #3
  store.subscribe(() => {
    console.log("Store is now", store.getState());
    ReactDOM.render(<App 
                      data={store.getState()}
                      onIncrement={ () => store.dispatch({ type: "INCREMENT", payload: '' }) }
                      />, document.getElementById('root'));
  });

  // #4 for ease of use from console
  const dispatchCommand = () => {
    store.dispatch({ type: "INCREMENT", payload: '' });
  }
  window.dispatchCommand = dispatchCommand;
};

export default Reduxbase;
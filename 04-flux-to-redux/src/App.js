import React from 'react';
import { createStore } from "redux";

class App extends React.Component {

  render() {

    // #1
    const reducer = function (state = [], action) {
      switch (action.type) {
        case "ADD_ITEM":
          return [...state, action.payload]; // ideally should be object based, but array for easier understanding
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
    });

    // #4
    store.dispatch({ type: "ADD_ITEM", payload: 'item added on ' + Date.now() });
    // same as #4 for ease of use from console
    const dispatchCommand = () => {
      store.dispatch({ type: "ADD_ITEM", payload: 'item added on ' + Date.now() });
    }
    window.dispatchCommand = dispatchCommand;

    return (
      <div> 
        Simplest Redux
      </div>
    )
  }
};

export default App;

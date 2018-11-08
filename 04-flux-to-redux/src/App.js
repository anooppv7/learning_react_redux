import React from 'react';
import Flux from 'flux'
import { createStore } from "redux";

/************************************* DISPATCHER : START *************************************/

var AppDispatcher = new Flux.Dispatcher();

/************************************* DISPATCHER : END *************************************/

class App extends React.Component {
  addItem() {
    AppDispatcher.dispatch({
      actionType: "ADD_ITEM",
      item: 'item added on ' + Date.now()
    });
  }

  render() {
    window.addItem = this.addItem;

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
    const store = createStore(reducer, "");

    window.store = store;

    // #3
    store.subscribe(() => {
      console.log("Store is now", store.getState());
    });

    return (
      <div> 
        Simplifying ...
      </div>
    )
  }
};

export default App;

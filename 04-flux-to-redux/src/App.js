import React from 'react';
import Flux from 'flux'
import { createStore } from "redux";

/************************************* DISPATCHER : START *************************************/

var AppDispatcher = new Flux.Dispatcher();

const reducer = function (state = [], action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload]; // ideally should be object based, but array for easier understanding
    default:
      return state;
  }
};

/************************************* DISPATCHER : END *************************************/

class App extends React.Component {
  _onChange = () => {
    console.log(getState());
  }

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

    return (
      <div> 
        Simplifying ...
      </div>
    )
  }
};

export default App;

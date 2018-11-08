import React from 'react';
import Flux from 'flux'

/************************************* DISPATCHER : START *************************************/

var AppDispatcher = new Flux.Dispatcher();

export function handle (state = [], action) {
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
    return (
      <div> 
        Simplifying ...
      </div>
    )
  }
};

export default App;

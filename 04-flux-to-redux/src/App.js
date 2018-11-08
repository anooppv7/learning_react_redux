import React from 'react';
import Flux from 'flux'
import { EventEmitter } from 'events'

/************************************* STORE : START *************************************/

var _items = {};

var AppStore = new EventEmitter();

export function getState() {
  return _items;
}

/************************************* STORE : END *************************************/

/************************************* DISPATCHER : START *************************************/

var AppDispatcher = new Flux.Dispatcher();

export function handle (payload) {
  var item = payload.item, actionType = payload.actionType;
  switch (actionType) {
    case "ADD_ITEM":
      _items = [..._items, item]; // ideally should be object based, but array for easier understanding
      break;
    default:
      return true;
  }
  AppStore.emitChange();
  return true;
};

/************************************* DISPATCHER : END *************************************/

class App extends React.Component {
  _onChange = () => {
    console.log(AppStore.getAll());
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
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

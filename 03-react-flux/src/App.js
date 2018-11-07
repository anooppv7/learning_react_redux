import React from 'react';
import Flux from 'flux'
import { EventEmitter } from 'events'

/************************************* STORE : START *************************************/

var _items = {};

var AppStore = new EventEmitter();

AppStore.getAll = function() {
  return _items;
};

AppStore.create = function(item) {
  var id = Date.now();
  _items[id] = item;
};

AppStore.emitChange = function() {
  this.emit('change');
};

AppStore.addChangeListener = function(callback) {
  this.on('change', callback);
};

AppStore.removeChangeListener = function(callback) {
  this.removeListener('change', callback);
};

/************************************* STORE : END *************************************/

/************************************* DISPATCHER : START *************************************/

var AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register(function(payload) {
  var item = payload.item, actionType = payload.actionType;
  switch (actionType) {
    case "ADD_ITEM":
      AppStore.create(item);
      break;
    default:
      return true;
  }
  AppStore.emitChange();
  return true;
});

/************************************* DISPATCHER : END *************************************/

/************************************* ACTION CREATOR : START *************************************/

var AppActions = {
  addItem: function(item) {
    AppDispatcher.dispatch({
      actionType: "ADD_ITEM",
      item: item
    });
  }
};

/************************************* ACTION CREATOR : END *************************************/

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
    AppActions.addItem('item added on ' + Date.now());
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

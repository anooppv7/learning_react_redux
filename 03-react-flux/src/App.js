import React from 'react';
import Flux from 'flux'
import { EventEmitter } from 'events'

/************************************* APP CONSTANTS : START *************************************/

var AppConstants = {
  ADD_ITEM: 'ADD_ITEM',
};

/************************************* APP CONSTANTS : END *************************************/

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
    case AppConstants.ADD_ITEM:
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
      actionType: AppConstants.ADD_ITEM,
      item: item
    });
  }
};

/************************************* ACTION CREATOR : END *************************************/

var getAppState = () => {
  var items = AppStore.getAll();
  return items;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items : getAppState() };
  }

  _onChange = () => {
    this.setState({ items : getAppState() });
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
    var itemNodes = [];
    for (var item in this.state.items) {
      itemNodes.push(
        <span key={item}>{item}<br/></span>
      );
    };
    return (
      <div>
        <h3 onClick={this.addItem}>Click to add an Item</h3>
        {itemNodes}
      </div>
    )
  }
};

export default App;

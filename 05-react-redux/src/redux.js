import { createStore } from 'redux';

//actions
export const onIncrement = () => ({ type: "INCREMENT", payload: '' });
export const onDecrement = () => ({ type: "DECREMENT", payload: '' });

// reducer
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

  export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
import { createStore, applyMiddleware, compose } from 'redux';


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

  const loggingMiddleware = store => next => action => {
        console.log(store.getState())
        next(action)
  }

  const middleware = applyMiddleware(loggingMiddleware);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  export const store = createStore(reducer, composeEnhancers(middleware));

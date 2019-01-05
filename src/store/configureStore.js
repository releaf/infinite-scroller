import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
/* eslint-disable import/no-extraneous-dependencies */
import { logger } from 'redux-logger';

import rootReducer from '../reducers';

let enhancer = applyMiddleware(thunkMiddleware);

if (process.env.NODE_ENV !== 'production') {
  enhancer = applyMiddleware(thunkMiddleware, logger);
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

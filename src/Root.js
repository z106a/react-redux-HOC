import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

export default ({ children, initialState= {} }) => { // destructuring from props
  const middleware = applyMiddleware(reduxPromise);
  const store = createStore(reducers, initialState, middleware);
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
};
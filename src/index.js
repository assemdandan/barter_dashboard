import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/index';

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);


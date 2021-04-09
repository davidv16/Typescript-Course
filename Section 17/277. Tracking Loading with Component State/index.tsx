import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

//a middleware to wire up redux and thunk
const store = createStore(reducers, applyMiddleware(thunk));

//the main render function to push react to the dom
ReactDOM.render(
  //wrap App in provider which contains the redux store
  <Provider store={store}>
    <App />,
  </Provider>,
  //access the div id of root and show the app in there.
  document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import helloReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import { fetchAllPosts } from './actions/index';


const store = createStore(helloReducer, applyMiddleware(thunk));


//let store = createStore(helloReducer) // this is store

store.dispatch(fetchAllPosts());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose,} from 'redux'
import promiseMiddleWare from 'redux-promise'
import rootReducer from './Store/Reducers/index';
const composeenhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStorWithMiddleWare = composeenhancer(applyMiddleware(promiseMiddleWare))(createStore)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {createStorWithMiddleWare(rootReducer)}>  
      <App />
     </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals811`
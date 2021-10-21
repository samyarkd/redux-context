import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// --------------S-----------------
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redusers'
import { Provider } from 'react-redux';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk));

// --------------E----------------



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

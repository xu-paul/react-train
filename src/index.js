import 'lodash';
import '@babel/polyfill';
// import "@babel/babel-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
// import './index.css';
import Router from './components/Router'
ReactDOM.render(
  <Router />,
  document.getElementById('containter')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorHandler from './ErrorHandler';

ReactDOM.render(
  <ErrorHandler>
    <App />
  </ErrorHandler>,
  document.getElementById('root'));
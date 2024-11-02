import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Ripple } from 'react-preloaders2';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Ripple color="#fff" background="#449440" />
  </React.StrictMode>,
  document.getElementById('root')
);

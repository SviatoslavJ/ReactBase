import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Toggle from './toggle';
import LoginControl from './loginControl';
import Page from './warningBanner';
import Calculator from './calculator';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toggle/>
    <LoginControl/>
    <Page/>
    <Calculator/>
  </React.StrictMode>
);

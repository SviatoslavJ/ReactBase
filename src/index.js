import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Clock';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import Page from './components/WarningBanner';
import Calculator from './components/Calculator';
import SignUpDialog from './components/Dialog';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toggle/>
    <LoginControl/>
    <Page/>
    <Calculator/>
    <SignUpDialog/>
  </React.StrictMode>

);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './components/Clock/Clock';
import Toggle from './components/Toggle/Toggle';
import LoginControl from './components/LoginControl/LoginControl';
import Page from './components/WarningBanner/WarningBanner';
import Calculator from './components/Calculator/Calculator';
import SignUpDialog from './components/Dialog/Dialog';
import Line from './components/Line/Line';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
    <Line />
    <Toggle />
    <Line />
    <LoginControl />
    <Line />
    <Page />
    <Line />
    <Calculator />
    <Line />
    <SignUpDialog />
  </React.StrictMode>
);

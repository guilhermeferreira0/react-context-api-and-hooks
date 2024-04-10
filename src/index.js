import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './components/Home';
import { CounterContextProvider } from './contexts/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
);

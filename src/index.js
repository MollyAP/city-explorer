import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Explorer from './explorer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Explorer />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Explorer from './Explorer';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header />
    <Explorer />
  </React.StrictMode>
);

reportWebVitals();

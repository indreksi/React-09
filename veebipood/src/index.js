import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//ilma loogiliste sulgudeta võtab ta terve selle node_module mooduli kasutusele
// { } võtab ta tüki ainult sellest moodulist

//ilma punkti ja kaldkriipsuta võtab faili node_modules kaustast
//kui alguses on ./ võtab faili meie failidest

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

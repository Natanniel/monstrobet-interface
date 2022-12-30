import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Index from './home/index'
import Joker from './slotmachine/index';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import Menu from './components/menu'

import { BrowserRouter, Route, Routes } from "react-router-dom"; // importando o BrowserRouter do pacote que acabamos de instalar


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(

  <React.StrictMode>
    <div style={{ minHeight: "100vh", backgroundColor: "#0f1923" }}>

      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jogos/joker" element={<Joker />} />
        </Routes>
      </ BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

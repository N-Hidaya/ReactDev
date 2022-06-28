import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, About, Contact, History } from './App';
import Custom from './custom';
import API from './apiSet';
import GQL from './graphQL';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />}>
        <Route path="/history" element={<History />}/>
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />}>
      
    </Route>
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
); 

/*<React.StrictMode>
    <App library="React"/>
    <Custom />
    <API />
    <GQL />
  </React.StrictMode> */



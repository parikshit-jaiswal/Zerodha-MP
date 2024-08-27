import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>
);


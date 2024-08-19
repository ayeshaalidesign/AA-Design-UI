import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import ProductProvider from "./contexts/ProductsProvider";
import CartProvider from './contexts/CartProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
 <ProductProvider>
        <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
        </React.StrictMode>
      </ProductProvider>
  </CartProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styless/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Storecontextprovider from './Storecontast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <BrowserRouter>
        <Storecontextprovider>
        <App />

        </Storecontextprovider>
     
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

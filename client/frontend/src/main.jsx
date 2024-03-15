import React from 'react';
import ReactDOM from 'react-dom/client';
import {Toaster} from 'react-hot-toast';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx';
import './index.css';


import store from './Redux/store.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      <Toaster />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>


  
);

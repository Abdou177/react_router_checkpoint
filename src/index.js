import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App';
import Description from './Component/Description';
import Home from './Home';
import AppRouter from './Router';

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
    
    </BrowserRouter>,
  document.getElementById('root')
);



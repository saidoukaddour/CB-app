import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Privateroutes from './components/Privateroutes';

import Errorpage from './components/Errorpage';

ReactDOM.render(
  <BrowserRouter>
      <React.StrictMode>
        
      <Routes >
     
      <Route path='/*' element={<App/>}></Route>
     
      <Route path='/admin' element={<Admin/>}></Route>
       
      <Route element={<Privateroutes/>}>
      <Route path="/admin/dash" element={<Dashboard/>}/>
      </Route>
      
</Routes>
        
      </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

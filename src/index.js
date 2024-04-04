import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login_sathyabama from './components/login-sathyabama/login-sathyabama';
import Event_cse from './components/EVENT_CSE/event_cse';
import { 
  createBrowserRouter,
  RouterProvider,
  Route
 } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/login",
    element:<Login_sathyabama/>,
    
  },
  {
    path:"/home",
    element: <Event_cse/>,
  },
  {
    path:'/Event_cse',
    element:<Event_cse/>,
  }


]) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

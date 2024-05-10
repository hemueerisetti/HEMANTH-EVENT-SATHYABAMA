import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login_sathyabama from './components/login-sathyabama/login-sathyabama';
import ForgotPassword from './components/forget_password/fpassword';
import EventRegistrationForm from './components/Home/Register_Event';
import EventPage from './components/Home/Home';
import EventPageStudent from './components/Home/Home-student';


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
    path:'/forgot-password',
    element:<ForgotPassword/>

  },
  {
    path:'/home-register',
    element:<EventRegistrationForm/>
  },
  {
    path:'/event-clubAdmin',
    element:<EventPage/>
  },
  {
    path:'/event-student',
    element:<EventPageStudent/>
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

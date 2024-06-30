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
import EventCards from './components/event_cards/event_card';
import UpdatePassword from './components/Update_Password/Update';
import ResetPassword from './components/Reset_Password/Reset';
import UserProfile from './components/user-profile/user-profile';


import { 
  createBrowserRouter,
  RouterProvider,
  Route
 } from 'react-router-dom';
import LandingPage from './components/Landing_page/Landing_page';

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
    path:'/ ',
    element:<EventRegistrationForm/>
  },
  {
    path:'/event-clubAdmin',
    element:<EventPage/>
  },
  {
    path:'/event-student',
    element:<EventPageStudent/>
  },
  {
    path:'',
    element:<LandingPage/>

  },
  {
    path:'/register-event',
    element:<EventCards/>
  },
  {
    path:'/update-password',
    element:<UpdatePassword/>

  },
  {
    path:'/reset-password',
    element:<ResetPassword/>

  },{
    path:'/user-profile',
    element:<UserProfile/>
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
// or send to an analytics endpoint. Learn more: 

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login_sathyabama from "./components/login-sathyabama/login-sathyabama";
import ForgotPassword from "./components/forget_password/fpassword";
import EventRegistrationForm from "./components/Home/Register_Event";
import EventPage_Clubadmin from "./Pages/Club-Admin_page/club-admin_page";
import EventPage_Student from "./Pages/Student_page/student_page";
import EventCards from "./components/event_cards/event_card";
import UpdatePassword from "./components/Update_Password/Update";
import ResetPassword from "./components/Reset_Password/Reset";
import UserProfile from "./components/user-profile/user-profile";
import AuthProvider from "./components/auth/auth";
import ProtectedRoute from "./components/auth/protected";
import EventPage_Staff from "./Pages/Staff_page/staff_page";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import LandingPage from "./components/Landing_page/Landing_page";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login_sathyabama />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register-event",
    element: (
      <ProtectedRoute>
        <EventCards />
      </ProtectedRoute>
    ),
  },
  {
    path: "/update-password",
    element: (
      <ProtectedRoute>
        <UpdatePassword />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <ProtectedRoute>
        <ResetPassword />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-profile",
    element: (
      <ProtectedRoute>
        <UserProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reg",
    element: (
      <ProtectedRoute>
        <EventRegistrationForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/event-clubAdmin",
    element: (
      <ProtectedRoute>
        <EventPage_Clubadmin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/event-student",
    element: (
      <ProtectedRoute>
        <EventPage_Student/>
      </ProtectedRoute>
    ),
  },
  {
    path:"/event-staff",
    element:<EventPage_Staff/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider isSignedIn={true}>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();

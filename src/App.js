
import './App.css';
import Login_sathyabama from './components/login-sathyabama/login-sathyabama';
import ForgotPassword from './components/forget_password/fpassword';
import EventRegistrationForm from './components/Home/Register_Event';
import LandingPage from './components/Landing_page/Landing_page';
import EventCards from './components/event_cards/event_card';
import ResetPassword from './components/Reset_Password/Reset';
import UpdatePassword from './components/Update_Password/Update';
import UserProfile from './components/user-profile/user-profile';
import EventPage_Student from './Pages/Student_page/student_page';
import EventPage_Clubadmin from './Pages/Club-Admin_page/club-admin_page';
import EventPage_Staff from './Pages/Staff_page/staff_page';

function App() {
  return (
    <div>
      <Login_sathyabama/>
      <EventRegistrationForm/>
      <ForgotPassword/>
      <EventPage_Student/>
      <EventPage_Clubadmin/>
      <EventPage_Staff/>
      <LandingPage/>
      <EventCards/>
      <ResetPassword/>
      <UpdatePassword/>
      <UserProfile/>
      
      
     
    </div>
  );
}

export default App;

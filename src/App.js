
import './App.css';
import Login_sathyabama from './components/login-sathyabama/login-sathyabama';
import ForgotPassword from './components/forget_password/fpassword';
import EventRegistrationForm from './components/Home/Register_Event';
import EventPage from './components/Home/Home';
import LandingPage from './components/Landing_page/Landing_page';
import EventCards from './components/event_cards/event_card';
import ResetPassword from './components/Reset_Password/Reset';
import UpdatePassword from './components/Update_Password/Update';
import UserProfile from './components/user-profile/user-profile';

function App() {
  return (
    <div>
      <Login_sathyabama/>
      <EventRegistrationForm/>
      <ForgotPassword/>
      <EventPage/>
      <LandingPage/>
      <EventCards/>
      <ResetPassword/>
      <UpdatePassword/>
      <UserProfile/>
      
      
     
    </div>
  );
}

export default App;

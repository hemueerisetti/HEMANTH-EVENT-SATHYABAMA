
import './App.css';
import Login_sathyabama from './components/login-sathyabama/login-sathyabama';
import ForgotPassword from './components/forget_password/fpassword';
import EventRegistrationForm from './components/Home/Register_Event';
import EventPage from './components/Home/Home';
import LandingPage from './components/Landing_page/Landing_page';
function App() {
  return (
    <div>
      <Login_sathyabama/>
      <EventRegistrationForm/>
      <ForgotPassword/>
      <EventPage/>
      <LandingPage/>
      
      
     
    </div>
  );
}

export default App;


import './App.css';
import Login_sathyabama from './components/login-sathyabama/login-sathyabama';
import Event_cse from './components/EVENT_CSE/event_cse'
import ForgotPassword from './components/forget_password/fpassword';
import EventRegistrationForm from './components/Home/Register_Event';
import EventPage from './components/Home/Home';
function App() {
  return (
    <div>
      <Event_cse/>
      <Login_sathyabama/>
      <EventRegistrationForm/>
      <ForgotPassword/>
      <EventPage/>
      
      
     
    </div>
  );
}

export default App;

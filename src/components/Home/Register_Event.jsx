import React,{ useState } from 'react';
import axios from 'axios';
import './Register_Event.css'; // Import your CSS file here

const styles3 = {
  body: {
    fontFamily: "'Arial', sans-serif", 
    backgroundColor: '#9e1c3f',
    display: 'flex',
    fontSize: '14px',
    outline: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
};

function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    eventname: '',
    eventdate: '',
    eventtime: '',
    eventvenue: '',
    eventcapacity: '',
    eventimage: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'eventimage') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await axios.post('http://localhost:8000/event', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response from server:', response.data);
      // You can handle the response accordingly, such as showing a success message
    } catch (error) {
      console.error('Error while sending data:', error);
      // You can handle errors here, such as displaying an error message to the user
    }
  };

  return (
    <div style={styles3.body}>
    <div className="Reg-container">
      <h2>New Event Details</h2>
      <div className="Reg-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="Reg-form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required/>
        </div>
        <div className="Reg-form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className="Reg-form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>
        </div>
        <div className="Reg-form-group">
          <label htmlFor="eventname">Event Name:</label>
          <input type="text" id="eventname" name="eventname" value={formData.eventname} onChange={handleChange} required/>
        </div>
        <div className="Reg-form-group">
          <label htmlFor="eventdate">Event Date:</label>
          <input type="date" id="eventdate" name="eventdate" value={formData.eventdate} onChange={handleChange} required/>
        </div>
        <div className="Reg-form-group">
          <label htmlFor="eventtime">Event Time:</label>
          <input type="time" id="eventtime" name="eventtime" value={formData.eventtime} onChange={handleChange} required/>
        </div>
        <div className="Reg-form-group">
          <label htmlFor="eventvenue">Event Venue:</label>
          <input type="text" id="eventvenue" name="eventvenue" value={formData.eventvenue} onChange={handleChange} required/>
        </div>
        <div className="Reg-form-group">
          <label htmlFor="eventcapacity">Event Capacity:</label>
          <input type="number" id="eventcapacity" name="eventcapacity" value={formData.eventcapacity} onChange={handleChange} required/>
        </div>
        <div className="Reg-form-group">
          <label htmlFor="eventimage">Upload Event Photo:</label>
          <input type="file" id="eventimage" name="eventimage" accept="image/*" onChange={handleChange} required/>
        </div>
        <button type="submit">Register</button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default EventRegistrationForm;
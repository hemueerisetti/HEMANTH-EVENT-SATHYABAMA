// import React, { useState } from 'react';
// import axios from 'axios';
// import './Reset.css'; // Import your CSS file here
// import { Link, useNavigate } from 'react-router-dom';

// const styles5 = {
//   body: {
//     fontFamily: "'Roboto', sans-serif",
//     display: 'flex',
//     fontSize: '14px',
//     outline: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//   }
// };

// const ResetPassword = () => {
//   const [email, setEmail] = useState('');
//   const [regNo, setRegNo] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://event-sathyabama-api.us-e2.cloudhub.io/api/Reset-password', {
//         email: email,
//         regNo: regNo
//       });

//       if (response.status === 200) {
//         setSuccess("Password reset link generated successfully");
//         setError(null); // clear previous errors if any
//         // Redirect or navigate to a different route
//         navigate('/update-password'); // replace with your desired route
//       } else {
//         setError('Invalid credentials'); // handle other error cases if needed
//         setSuccess(null); // clear success message if any
//       }
//     } catch (error) {
//       setError(error.response ? error.response.data.message : 'An error occurred');
//       console.error('Error:', error.response ? error.response.data : error.message);
//       setSuccess(null); // clear success message if any
//     }
//   };

//   const reImageStyle = {
//     backgroundImage: "url('https://t3.ftcdn.net/jpg/04/39/18/98/360_F_439189843_VPDNfusFZXHFXD8KWPDlaFbUfYcHBcwW.jpg')",
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh',
//     width: '100vw',
//   };

//   return (
//     <div style={reImageStyle}>
//       <div style={styles5.body}>
//         <div className="re-container">
//           <form className="reset-password-form" onSubmit={handleSubmit}>
//             <h2>Reset Password</h2>
//             <div className="re-form-group">
//               <label htmlFor="email">Email *</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               /><br/><br/>
//               <label htmlFor="regNo">RegNo *</label>
//               <input
//                 type="text"
//                 id="regNo"
//                 name="regNo"
//                 placeholder="Enter RegNo"
//                 value={regNo}
//                 onChange={(e) => setRegNo(e.target.value)}
//                 required
//               />
//             </div>
//             {error && <p className="error">{error}</p>}
//             {success && <p className="success">{success}</p>}
//             <button type="submit">RESET PASSWORD</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

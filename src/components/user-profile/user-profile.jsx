// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './user-profile.css'; // Import your CSS file here

// const UserProfile = ({ userId }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch user data from the API
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`http://localhost/users/${regNo}`);
//         setUserData(response.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [regNo]);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <h1>Student Profile Page Design Example</h1>
//         <p>A responsive student profile page design</p>
//       </div>
//       <div className="profile-card">
//         <div className="profile-left">
//           <img
//             src={userData.profileImage || 'https://via.placeholder.com/150'}
//             alt="Profile"
//             className="profile-image"
//           />
//           <h2>{userData.name}</h2>
//           <p>Register Number: {userData.regNo}</p>
//           <p>Email: {userData.email}</p>
//           <p>year: {userData.year}</p>
//         {/* </div>
//         { <div className="profile-right">
//           <div className="profile-info">
//             <h3>General Information</h3>
//             <table>
//               <tbody>
//                 <tr>
//                   <td>Roll</td>
//                   <td>: {userData.roll}</td>
//                 </tr>
//                 <tr>
//                   <td>Academic Year</td>
//                   <td>: {userData.academicYear}</td>
//                 </tr>
//                 <tr>
//                   <td>Gender</td>
//                   <td>: {userData.gender}</td>
//                 </tr>
//                 <tr>
//                   <td>Religion</td>
//                   <td>: {userData.religion}</td>
//                 </tr>
//                 <tr>
//                   <td>Blood</td>
//                   <td>: {userData.bloodType}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div> } */}
//           <div className="profile-other-info">
//             <h3>Other Information</h3>
//             <p>
//               {userData.otherInformation}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

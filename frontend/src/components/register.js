// import React, { useContext, useState } from "react";

// import axios from "axios";
// import "./login.css"
// import { useSelector } from "react-redux";

// // =================================================================
// const Register = () => {
//   const state = useSelector((state) => {
//     return { isLoggedIn: state.loginReducer.isLoggedIn };
//   });

//   const [username, setusername] = useState("");
//   const [phoneNumber, setphoneNumber] = useState(0);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const role_id = "1";
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState(false);
//   // =================================================================
//   //hi

//   const addNewUser = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await axios.post("http://localhost:5000/users", {
//         username,
//         phoneNumber,
//         email,
//         password,
//       });
//       if (result.data.success) {
//         setStatus(true);
//         setMessage("The user has been created successfully");
//       } else throw Error;
//     } catch (error) {
//       setStatus(false);
//       if (error.response && error.response.data) {
//         return setMessage(error.response.data.message);
//       }
//       setMessage("Error happened while register, please try again");
//     }
//   };

//   return (
//     <>
//       {/* <div class="main">
//         <input type="checkbox" id="chk" aria-hidden="true" />
//         <div className="Form"> */}
//           {!state.isLoggedIn ? (
//             <>
//             <head>
// 	<title>Slide Navbar</title>
// 	<link rel="stylesheet" type="text/css" href="slide navbar style.css"/>
// <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"/>
// </head>

//               <div class="signup">
//                 <form onSubmit={addNewUser}>
//                   <label for="chk" aria-hidden="true">
//                     Sign up
//                   </label>
//                   <input
//                     onChange={(e) => setusername(e.target.value)}
//                     type="text"
//                     name="txt"
//                     placeholder="User name"
//                     required=""
//                   />
//                   <input
//                     onChange={(e) => setphoneNumber(e.target.value)}
//                     type="number"
//                     name="phone"
//                     placeholder="phone Number"
//                     required=""
//                   />
//                   <input
//                     onChange={(e) => setEmail(e.target.value)}
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     required=""
//                   />
//                   <input
//                     onChange={(e) => setPassword(e.target.value)}
//                     type="password"
//                     name="pswd"
//                     placeholder="Password"
//                     required=""
//                   />
//                   <button>Sign up</button>
//                 </form>
//               </div>

//               {/* <p className="Title">Register:</p>
//                 <form onSubmit={addNewUser}>
//                   <br />
//                   <input
//                     type="text"
//                     placeholder="user name"
//                     onChange={(e) => setusername(e.target.value)}
//                   />
//                   <br />
//                   <input
//                     type="number"
//                     placeholder="phone Number"
//                     onChange={(e) => setphoneNumber(e.target.value)}
//                   />
//                   <br />
//                   <br />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <br />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <br />
//                   <button>Register</button>
//                   <br />
//                 </form> */}
//               {status
//                 ? message && <div className="SuccessMessage">{message}</div>
//                 : message && <div className="ErrorMessage">{message}</div>}
//             </>
//           ) : (
//             <p>Logout First</p>
//           )}
//         {/* </div> */}
//       {/* </div> */}
//     </>
//   );
// };

// export default Register;

// // import React, { useState } from 'react'
// import React, { useState, useContext } from 'react'

// import logo from '..//assets/logo.svg'
// import  {useNavigate}  from 'react-router-dom'
// import { authDataContext } from '../context/AuthContext'
// import axios from "axios";
// const Signup = () => {
//   const[show, setShow] = React.useState(false)
//   let {serverUrl} = useContext(authDataContext);
//   let navigate = useNavigate();
//   let [firstName, setFirstName] = useState("")
//   let [lastName, setLastName] = useState("")
//   let [userName, setUserName] = useState("")
//   let [email, setEmail] = useState("")
//   let [password, setPassword] = useState("")



// const handleSignup = async (e) => {
//   e.preventDefault()
//   try {
//     let result = await axios.post(serverUrl+"/api/auth/signup",{
//       firstName,
//       lastName,
//       userName,
//       email,
//       password
//     },{withCredentials:true})
//     console.log(result);
//     console.log("Server URL:", serverUrl);

//   } catch (error) {
//     console.error("Error during signup:", error);
//     // Handle error appropriately, e.g., show a notification or alert
//   }
// }

// // export default Signup;  
// return (
//     <div className='w-full h-screen bg-[white] flex flex-col items-center justify-start gap-[10px]'>
//       <div className='p-[30px] lg:p-[35px] w-full h-[80px] flex items-center justify-center'>
//         <img src={logo} alt="Logo" />
//       </div>
//       <form className='w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center gap-[10px] p-[15px] ' onSubmit={handleSignup} >
//         <h1 className='text-gray-800 text-[30px] font-semibold mb-[30px]'>Sign Up</h1>
//         <input type="text" placeholder='firstname' required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
//         <input type="text" placeholder='lastname' required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
//         <input type="text" placeholder='username' required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' value={userName} onChange={(e)=>setUserName(e.target.value)} />
//         <input type="email" placeholder='email' required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' value={email} onChange={(e)=>setEmail(e.target.value)} />
//        <div  className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px]  rounded-md relative'>
//          <input type={show?"text":"password"} placeholder='password' required className='w-full h-full border-none text-[18px] px-[20px] py-[10px] rounded-md '  value={password} onChange={(e)=>setPassword(e.target.value)} />
//           <span onClick={() => setShow(!show)} className='absolute right-[20px] top-[15px] text-gray-600 cursor-pointer'>{show ? 'Hide' : 'Show'}</span>
//        </div>
//         <button className='w-[full] h-[50px] rounded-full bg-[#1dc9fd] mt-[30px] text-white '>Sign Up</button>
//         <p className='text-gray-600 text-[16px] mt-[20px] text-center cursor-pointer'>Already have an account? <span className='text-[#1dc9fd] ' onClick={()=>navigate("/login")}>Sign In</span></p>
//       </form>
//     </div>
//   )
// }

// export default Signup;




import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from '../assets/logo.svg';
import { authDataContext } from '../context/AuthContext';

const Signup = () => {
  const [show, setShow] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    // setLoading(true);
    setError("");
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        {
          firstName,
          lastName,
          userName,
          email,
          password,
          // setLoading(false)
        },
        { withCredentials: true }
      );

      console.log("Signup success:", result.data);
      // Redirect to login or home after successful signup
      navigate('/login'); // or another route depending on your flow

    } catch (error) {
      console.error("Error during signup:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Signup failed. Please try again.");
      // setLoading(false);
      // alert("Signup failed. Please try again."); // Optional UX improvement
    }
  };

  return (
    <div className='w-full h-screen bg-white flex flex-col items-center justify-start gap-2.5'>
      <div className='p-7 lg:p-9 w-full h-20 flex items-center justify-center'>
        <img src={logo} alt="Logo" />
      </div>

      <form
        onSubmit={handleSignup}
       className='w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center gap-[10px] p-[15px] '
      >
        <h1 className='text-gray-800 text-[30px] font-semibold mb-[30px]'>Sign Up</h1>

        <input type="text" placeholder='firstname' required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />

        <input
          type="text"
          placeholder='Last Name'
          required
        className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="text"
          placeholder='Username'
          required
          className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="email"
          placeholder='Email'
          required
        className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className='relative w-full h-12 border-2 border-gray-600 text-gray-800 text-lg rounded-md'>
          <input
            type={show ? "text" : "password"}
            placeholder='Password'
            required
            className='w-full h-full border-none text-lg px-5 py-2.5 rounded-md'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShow(!show)}
            className='absolute right-5 top-3.5 text-gray-600 cursor-pointer'
          >
            {show ? 'Hide' : 'Show'}
          </span>
        </div>


 {error &&   <p className='text-center text-red-500'>
  {error}
</p>}
        <button
          type='submit'
          className='w-full h-12 rounded-full bg-[#1dc9fd] mt-7 text-white font-semibold'
        >
          Sign Up
        </button>

        <p className='text-gray-600 text-base mt-5 text-center'>
          Already have an account?{" "}
          <span
            className='text-[#1dc9fd] cursor-pointer'
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;

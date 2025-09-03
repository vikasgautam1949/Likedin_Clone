import React from 'react'
import logo from '..//assets/logo.svg'
import  {useNavigate}  from 'react-router-dom'
const Signup = () => {
  const[show, setShow] = React.useState(false)
  let navigate = useNavigate();
  return (
    <div className='w-full h-screen bg-[white] flex flex-col items-center justify-start gap-[10px]'>
      <div className='p-[30px] lg:p-[35px] w-full h-[80px] flex items-center justify-center'>
        <img src={logo} alt="Logo" />
      </div>
      <form className='w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center gap-[10px] p-[15px] '>
        <h1 className='text-gray-800 text-[30px] font-semibold mb-[30px]'>Sign In</h1>
        <input type="email" placeholder='email' required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'/>
       <div  className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px]  rounded-md relative'>
         <input type={show?"text":"password"} placeholder='password' required className='w-full h-full border-none text-[18px] px-[20px] py-[10px] rounded-md ' />
          <span onClick={() => setShow(!show)} className='absolute right-[20px] top-[15px] text-gray-600 cursor-pointer'>{show ? 'Hide' : 'Show'}</span>
       </div>
        <button className='w-[full] h-[50px] rounded-full bg-[#1dc9fd] mt-[30px] text-white ' onClick={()=>navigate("/")}>Sign In</button>
        <p className='text-gray-600 text-[16px] mt-[20px] text-center cursor-pointer'>Already have an account? <span className='text-[#1dc9fd] ' onClick={()=>navigate("/signup")}>Sign Up</span></p>


      </form>
    </div>
  )
}

export default Signup
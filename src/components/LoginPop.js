import React, { useState } from 'react'
import {assets} from "../assets/frontend_assets/assets"
const LoginPop = ({setShowLogin}) => {
  const [currState,setCurrState]=useState("sign Up")
  return (
    <div className='absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid'>
      <form className='place-self-center max-w-[330px] min-w-[24vw] text-[#808080] bg-white flex-col gap-6 p-[25px_30px] rounded-[8px] text-[14px] animate-fade-in'>
          <div className='flex justify-between items-center text-black'>
            <h2>{currState}</h2>
            <img className="w-[16px] cursor-pointer" onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='' />
          </div>
          <div className='flex flex-col gap-5'>
            {currState==="Login"?<></>:<input className='outline-none border border-solid border-[#c9c9c9] rounded-[4px] pl-3' type='text' placeholder='Your name' required/>}
            
            <input className='outline-none border border-solid border-[#c9c9c9] rounded-[4px] pl-3' type='email' placeholder='Your email' required/>
            <input className='outline-none border border-solid border-[#c9c9c9] rounded-[4px] pl-3' type='password' placeholder='Password' required/>

          </div>
          <button className='border-none p-2 rounded-[4px] bg-[tomato] text-white text-[15px] cursor-pointer w-full mt-2'>{currState==="sign Up" ?"create account":"Login"}</button>
          <div className='flex items-start gap-2 mt-[14px]'>
            <input className='mt-[5px]' type='checkbox' required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currState==="Login"?
          <p>Create a new account ? <span className='text-[tomato] font-medium cursor-pointer' onClick={()=>setCurrState("sign Up")}>Click here</span></p>
          : <p>Already have an account? <span className='text-[tomato] font-medium cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
          
         
      </form>
    </div>
  )
}

export default LoginPop
import React, { useState,useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("Home");
    const {getTotalCartAmount}=useContext(StoreContext)
    const menuItems = ["Home", "Menu", "Mobile-app", "Contact us"];
  return (
    <div className='pt-[20px] pb-[20px] flex justify-between items-center'>
        <Link to="/"><img src={assets.logo} alt='' className='w-[150px]' /></Link>
        <ul className='flex list-none gap-[20px] text-[#40557e] text-[18px]'>
        {menuItems.map((item) => (
        <li
          key={item}
          onClick={() => setMenu(item)}
          className={`cursor-pointer ${
            menu === item
              ? "pb-[2px] border-b-[2px] border-[#40557e]"
              : ""
          }`}
        >
          {item}        
        </li>
      ))}
        </ul>
        <div className='flex items-center gap-10'>
            <img src={assets.search_icon} alt=''/>
            <div className='relative'>
                <Link to="/cart"><img src={assets.basket_icon} alt=''/></Link>
                <div className={getTotalCartAmount()===0?"":"absolute min-w-1.5 min-h-1.5 bg-red-400 rounded top-[-5px] right-[-5px]"}></div>
            </div>
            <button className='bg-transparent text-[16px] text-[#49557e] border-[1px] border-red-700 pt-[10px] pb-2.5 pl-[30px] pr-[30px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition-[0.3s]' onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
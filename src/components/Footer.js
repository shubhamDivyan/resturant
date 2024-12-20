import React from "react";
import {assets} from '../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className="text-white bg-[#959292] flex flex-col items-center gap-[20px] p-[20px_8vw] pt-[80px] mt-[100px] " id="footer">
      <div className="w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-[80px]">
        <div className="flex flex-col items-start gap-[20px]">
          <img className="text-[#d9d9d9] w-[150px] " src={assets.logo} alt="" />
          <p>Veniam minim dolore mollit cupidatat ad laborum. Anim ad ullamco consectetur ad dolor voluptate. Voluptate voluptate fugiat elit magna dolor cillum do sint laborum. Elit laboris velit consectetur aliqua.
          </p>
          <div className="flex w-[40px] ">
            <img className="m-2" src={assets.facebook_icon} alt=""/>
            <img className="m-2" src={assets.twitter_icon} alt=""/>
            <img className="m-2" src={assets.linkedin_icon} alt=""/>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
            <h2 className="text-white">COMPANY</h2>
            <ul className="cursor-pointer">
              <li className="mt-4" >Home</li>
              <li className="mt-4">About Us</li>
              <li className="mt-4">Delivery</li>
              <li className="mt-4"> Privacy policy</li>
            </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
            <h2 className="text-white">GET IN TOUCH  </h2>
            <ul className="list-none mb-2.5">
              <li>+91 12345-78908</li>
              <li>contact@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 m-[20px_0px] bg-white border-none"/>
      <p className="footer-copyright">Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;

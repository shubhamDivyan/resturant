import React from 'react';
import { menu_list } from '../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCatgory }) => {
  return (
    <div className="flex flex-col gap-[20px]" id="explore-menu">
      <h1 className="text-[#262626] font-semibold text-3xl">Explore Our Menu</h1>
      <p className="max-w-[60%] text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and
        culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience.
      </p>
      <div className="flex justify-between items-center gap-[30px] mt-[20px] mb-[20px]">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() =>
              setCatgory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
            }
          >
            {/* Apply border conditionally based on the active category */}
            <img
              src={item.menu_image}
              alt="menu-img"
              className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-200 ${
                category === item.menu_name
                  ? 'border-4 border-red-500'
                  : 'border-2 border-transparent'
              }`}
            />
            <p
              className={`mt-5 text-[#747474] text-responsive cursor-pointer text-center ${
                category === item.menu_name ? 'font-semibold text-red-500' : ''
              }`}
            >
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="mt-2.5 mb-2.5 h-2 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;


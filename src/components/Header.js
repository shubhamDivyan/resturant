import React from 'react'

const Header = () => {
  return (
    <div className="h-[34vw] mt-[30px] mb-[30px] ml-auto mr-auto bg-center bg-contain relative bg-no-repeat"
    style={{ backgroundImage: "url('/header_img.png')" }}>
        <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] ml-12 animate-fade-in'>
            <h2 className='font-semibold text-white text-[4.5vw]'>Order your favourite food here</h2>
            <p className='text-white text-[1vw]'>Choose from a diverse menu featuring a deletable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button className='border-none text-[#747474] font-semibold pt-[1vw] pb-[1vw] pl-[2.3vw] pr-[2.3vw] bg-white rounded-full '>View Menu</button>
        </div>
    </div>
  )
}

export default Header
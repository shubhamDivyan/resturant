import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='flex items-start justify-between gap-[50px] mt-[100px] w-full'>
        <div className='w-[max(30%,500px)]'>
          <p className='font-semibold text-[30px] mb-[50px]'>
            Delivery Information
          </p>
          <div className='flex gap-[10px]'>
              <input  className='mb-[15px]  p-2 border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='first Name'/>
              <input  className='mb-[15px]  p-2 border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='last Name'/>

          </div>
          <input  className='mb-[15px]   p-2 border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='Email address'/>
          <input  className='mb-[15px] ml-2  p-2 border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='Street'/>
          <div className='flex gap-[10px]'>
              <input  className='mb-[15px]  p-2 border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='City'/>
              <input  className='mb-[15px]  p-2 border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='state'/>

          </div>
          <div className='flex gap-[10px]'>
              <input  className='mb-[15px]  p-2 border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='zip code'/>
              <input  className='mb-[15px]  p-2 border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='country'/>

          </div>
          <input  className='mb-[15px]  p-2 border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato]' type='text' placeholder='Phone'/>
        </div>
        <div className=' w-[max(40%,500px)]'>
        <div className='flex-1 flex flex-col gap-[20px]'>
              <h2>Cart Totals</h2>
              <div>
                <div className='flex justify-between text-[#555]'>
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr className='m-[10px_0px]'/>
                <div className='flex justify-between text-[#555]'>
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount()===0?0:2}</p>
                </div>
                <hr/>
                <div className='flex justify-between text-[#555]'>
                  <p>Total</p>
                  <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                </div>
              </div>
              <button className='border-none text-white bg-[tomato] w-[max(15vw,200px)] p-[12px_0px] rounded-[4px] cursor-pointer mt-[30px]'>PROCEED TO PAYMENT</button>
            </div>
        </div>
    </form>
  )
}

export default PlaceOrder
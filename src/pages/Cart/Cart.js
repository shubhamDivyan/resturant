import React, { useContext} from 'react'
import { StoreContext } from '../../Context/StoreContext'
import {  useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItem,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='mt-[100px]'>
        <div className='cart-items'>
          <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]'>
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
          </div>
          <br/>
          <hr/>
          {food_list.map((item,index)=>{
              if(cartItem[item._id]>0){
                return(
                  <div>
                        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center  text-[max(1vw,12px)] cart-items-item m-[10px_0px] text-black'>
                      <img className='w-[50px]' src={item.image} alt=''/>
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItem[item._id]}</p>
                      <p>${item.price*cartItem[item._id]}</p>
                      <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer'>X</p>
                  </div>
                  <hr className='h-[1px] bg-[#e2e2d2] border-none'/>
                  </div>
                  
                )
              }
          })}
        </div>
        <div className='mt-[80px] flex justify-between gap-[max(12vw,20px)]'>
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
              <button onClick={()=>navigate('/order')} className='border-none text-white bg-[tomato] w-[max(15vw,200px)] p-[12px_0px] rounded-[4px] cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
            <div className='flex-1'>
                <div>
                  <p className='text-[#555] '>IF YOU HAVE PROMO CODE, ENTER IT HERE</p>
                  <div className='mt-2.5 flex justify-between item-center bg-[#eaeaea] rounded-[4px]'>
                      <input className='bg-transparent border-none outline-none pl-2.5px' type='text' placeholder='promo code'/>
                      <button className="w-[max(10vw,150px)] p-[12px_5px] bg-black border-none text-white rounded-[4px]">Submit</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
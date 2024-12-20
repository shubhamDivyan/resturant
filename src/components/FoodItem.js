import React, { useContext} from 'react'
import rating from '../assets/frontend_assets/rating_starts.png'
import { assets } from '../assets/frontend_assets/assets';
import { StoreContext } from '../Context/StoreContext';
const FoodItem = ({id, name,price,description,image}) => {

  // const [itemCount,setItemCount]=useState(0);
  const {cartItem,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='w-full m-auto rounded-[15px] shadow-[0px_0px_0px_rgba(0,0,0,0.15)] animate-fadeIn'>
        <div className='relative '>
            <img className='w-full rounded-[15px_15px_0_0] ' src={image} alt=''/>
            {
              !cartItem[id]
              ?<img className='w-[35px] absolute bottom-3.5 right-3.5 cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
              :<div className='absolute bottom-3.5 right-3.5 flex items-center gap-2.5 p-2 rounded-[50px] bg-white cursor-pointer'>
                <img className='w-[30px]' onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt=''/>
                <p>{cartItem[id]}</p>
                <img className='w-[30px]' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
              </div>
            }
        </div>
        <div className='p-[20px]'>
            <div className='flex justify-between items-center mb-2.5'>
              <p className='text-[30x] font-semibold'>{name}</p>
              <img src={rating} alt='' className='w-[70px]' />
            </div>
           <p className='text-[#676767] text-[12px]'>{description}</p>
           <p className='text-[tomato] text-[22px] font-semibold m-[10px_0px]'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
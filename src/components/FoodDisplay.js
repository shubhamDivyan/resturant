import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from './FoodItem';

const FoodDisplay = ({category,setCategory}) => {
    const {food_list}=useContext(StoreContext);
  return (
    <div className='mt-[30px] ' id='food-display'>
        <h2 className='text-3xl font-semibold mb-9 '>Top dishes near you</h2>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px] gap-y-[50px]'>
            {food_list.map((items,index)=>{
              if(category==="All" || category===items.category){
                return <FoodItem key={index} id={items._id} name={items.name} description={items.description} price={items.price} image={items.image} />
              }
               
            })}
        </div> 
    </div>
  )
}

export default FoodDisplay
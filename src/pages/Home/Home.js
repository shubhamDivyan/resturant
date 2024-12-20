import React, { useState } from 'react'
import Header from '../../components/Header'
import ExploreMenu from '../../components/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay';

const Home = () => {
  const [category,setCatgory]=useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCatgory={setCatgory}/>
        <FoodDisplay category={category} setCatgory={setCatgory}/>
    </div>
  )
}

export default Home
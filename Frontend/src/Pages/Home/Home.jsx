import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';

function Home() {

    const [category ,setcategory]=useState("All");


  return (
    <div >
      
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <FoodDisplay Category={category}/>

    </div>
  )
}

export default Home

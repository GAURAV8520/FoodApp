import React, { useState } from 'react';
import { assets } from '../../assets/assets';

function FoodItem({ id, name, price, description, image }) {
   
    const [itemcount,setitemcount]=useState(0);

  
    return (
    <div className='w-full max-w-xs mx-auto rounded-md overflow-hidden shadow-md'>
      <img className='w-full h-48 object-cover' src={image} alt={name} />
    
      <div className='p-4'>
      
        <p className='text-xl font-semibold'>{name}</p>
        <div className='flex items-center mb-2'>
        <p className='text-gray-600 pr-3'>Rating</p>
          <img className='w-22 h-6 mr-1' src={assets.rating_starts} alt='Rating' />
         
        </div>
        <p className='text-sm text-gray-700'>{description}</p>
        <div className='flex items-center justify-between mt-2 p-1'>
        <p className='text-lg font-semibold  text-orange-600'>${price}</p>
        {
        !itemcount
        ?<  img className='' onClick={()=>setitemcount(prev=>prev+1)} src={assets.add_icon_green}/>
        :
        <div className='flex gap-2 items-center  bg-slate-100 rounded-full p-1'>
            <img className='w-8' onClick={()=>setitemcount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
            <p className='font-semibold text-lg'>{itemcount}</p>
            <img className='w-8' onClick={()=>setitemcount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
        </div>
    }  
        </div>
        
      </div>
    </div>
  );
}

export default FoodItem;

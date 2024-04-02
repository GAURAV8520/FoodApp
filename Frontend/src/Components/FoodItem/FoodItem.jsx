import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/Storecontext';

function FoodItem({  Id, name, price, description, image }) {
   
    

    const{ cartItem,addTocart,removeFromCart}=useContext(StoreContext);
  
    return (
    <div className='w-full max-w-xs mx-auto rounded-md overflow-hIdden shadow-md'>
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
        !cartItem[Id]
        ?<  img className='' onClick={()=>addTocart(Id)} src={assets.add_icon_green}/>
        :
        <div className='flex gap-2 items-center  bg-slate-100 rounded-full p-1'>
            <img className='w-8' onClick={()=>removeFromCart(Id)} src={assets.remove_icon_red} alt="" />
            <p className='font-semibold text-lg'>{cartItem[Id]}</p>
            <img className='w-8' onClick={()=>addTocart(Id)} src={assets.add_icon_green} alt="" />
        </div>
    }  
        </div>
        
      </div>
    </div>
  );
}

export default FoodItem;

import React from 'react'
import { menu_list } from '../../assets/assets'

function Exploremenu() {
  return (
    <div className='margin flex flex-col gap-4 mt-10' id='ExploreMenu'>
        <h1 className='text-5xl '>Explore our Menu</h1>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       <div className='scrollhide flex items-center justify-around my-1 gap-20 text-center  overflow-x-scroll'>
        {menu_list.map((item,index)=>{
            return (
                <div key={index}>
                    <img className='w-[9vw] min-w-36 cursor-pointer rounded-3xl transition-2s' src={item.menu_image} alt="" />
                    <p className='mt-5 sm:text-sm lg:text-[1.5vw] '>{item.menu_name}</p>

                </div>
            )
        })}
       </div>
    </div>
  )
}

export default Exploremenu;

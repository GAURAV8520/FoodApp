import React, { useState } from 'react'
import { assets } from '../assets/assets'

function Navbar() {

  const [menu,Setmenu]=useState("Home");


  return (
    <div className='w-full h-lvh'  >
      <div className='py-5 divcentre justify-around w-full'>
        <img src={assets.logo} alt="" />
        <ul className='divcentre gap-8 list-none text-lg cursor-pointer' >
          <li onClick={()=>Setmenu('Home')} className={menu==='Home'?'active':''} >Home</li>
          <li onClick={()=>Setmenu('Menu')} className={menu==='Menu'?'active':''}>Menu</li>
          <li onClick={()=>Setmenu('Mobile-app')} className={menu==='Mobile-app'?'active':''}>Mobile-app</li>
          <li onClick={()=>Setmenu('Contact us')} className={menu==='Contact us'?'active':''}>Contact us</li>
        </ul>
        <div className='divcentre gap-8'>
          <img src={assets.search_icon} alt="" />
          <div className='divcentre gap-8  relative'>
            <img src={assets.basket_icon} alt="" />
            <div className='dot absolute min-h-2 min-w-2 bg-orange-500 rounded-full -top-2 -right-2'></div>
            </div>
            <div className=''>
              <button className='px-5 py-2 bg-slate-200 border-solid border-2  border-orange-400  text-black rounded-full text-lg hover:bg-orange-400'>Sign in</button>
              
          </div>
        </div>

      </div> 
    </div>
  )
}

export default Navbar

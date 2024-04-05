import React from 'react'

function Header() {
  return (
    <div className='margin header relative h-[34vw]'>
      <div className='header-contain absolute flex flex-col items-start gap-5  bottom-10 px-10 '>
      <h1 className='hide lg:text-6xl  md:text-3xl sm:text-1xl text-slate-100 mb-5'>Order Your <br /> Favorite food here</h1>
        <p className='text-sm  hide text-slate-100 mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem excepturi ullam, <br /> ducimus nisi exercitationem accusantium reiciendis,<br /> quibusdam deserunt corporis beatae non qui vel <br /> veniam voluptates? Praesentium dignissimos ab voluptatem sunt.</p>
        <button className='button hide'>view menu</button>
      
      </div>
        
    </div>
  )
}

export default Header

"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [menu,setMenu] = useState(true);
  return (
    <nav className='flex flex-row justify-between  px-20  border-b-[1px] border-zinc-600  items-center text-white '>
        <div className="w-40 h-40 rounded-full bg-[#1AB69D] absolute top-[-10%] left-[20%] blur-[100px] z-0"></div>
        <div className="w-40 h-40 rounded-full bg-pink-500 absolute top-[-10%] left-[28%] blur-[100px] z-0"></div>
        <h1 className='text-4xl font-bold'>LOGO</h1>
        <div className=" flex flex-row gap-7 text-xl z-[1]" >
             <div className='cursor-pointer hover:text-[#1AB69D] py-5'>Home</div>
             <div className='cursor-pointer hover:text-[#1AB69D] group transition-all ease-in-out  py-5 relative' onMouseEnter={()=>setMenu(false)} onMouseLeave={()=>setMenu(true)}>Service▾
            {!menu?  <div className=" absolute top-[100%]  left-0 w-[400px] bg-white py-3 px-10 text-black flex-col gap-3 flex flex-wrap h-[200px]  ">
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>

        </div>:""}

             </div>
             <div className='cursor-pointer hover:text-[#1AB69D] py-5'>Contact us</div>
             <div className='cursor-pointer hover:text-[#1AB69D] py-5'>Blog</div>
             <div className='cursor-pointer hover:text-[#1AB69D] py-5'>About</div>
        </div>
        <div className=" py-3 px-5 rounded-md bg-green-400">Call Now</div>

    </nav>
  )
}

export default Navbar

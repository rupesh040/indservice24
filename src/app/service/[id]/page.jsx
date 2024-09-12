"use client"
import Sidemenu from '@/app/components/Sidemenu';
import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import Heading from './component/Heading';


const page = () => {
    const [menu,setMenu] = useState(true);
    const [sideMenu,setSideMenu] = useState(true);
    const close = () =>{
        setSideMenu(prevState => !prevState);
    }
  return (<>
    <nav className='flex flex-row justify-between  min-[1080px]:px-20 max-[1080px]:px-5   items-center  max-[1080px]:py-5 bg-white shadow-lg sticky top-0 text-black z-10'>
        <h1 className='text-4xl font-bold'>LOGO</h1>
        <div className=" flex flex-row gap-7 text-xl z-[1] max-[1080px]:hidden" >
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
        <div className=" py-3 px-5 rounded-md bg-green-400 max-[1080px]:hidden">Call Now</div>
        <i class="ri-menu-line min-[1080px]:hidden text-2xl cursor-pointer hover:text-zinc-900 hover:bg-zinc-400 px-3 rounded-lg py-1" onClick={()=>{setSideMenu(false)}}></i>
        {    !sideMenu?<Sidemenu close={close}/>:""}

    </nav>
<Heading/>
    </>
  )
}

export default page

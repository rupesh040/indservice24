import React from 'react'
import Navbar from './Navbar'
const Head = () => {
  return (
    <header className='bg-[#020C19] h-[800px]  relative'>
    <Navbar/>
    <h1 className='text-white text-6xl  max-w-[1100px] mx-auto leading-[5rem] tracking-wide text-center font-semibold mt-20'>Perfect for <span className='px-6 border-[1px] border-zinc-800 rounded-full pb-2 text-[#E84C61] text-5xl'>Repair</span> <span className='text-[#F8B81F]'>&</span>  <span className='px-5 border-[1px] border-zinc-800 rounded-full pb-2 text-[#32B879] text-5xl'>Service</span> in Home applainces</h1>
    <p className='text-white text-xl font-light tracking-wider max-w-[900px] mx-auto text-center pt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam expedita minima. Earum quae rem dolor temporibus aspernatur nisi voluptatem!</p>
    <div className="background h-40 overflow-hidden relative flex gap-5 justify-around bg-[#020C19]">
        <div className="w-60 h-40 rounded-full bg-yellow-300 blur-[140px] mt-72 "></div>
        <div className="w-60 h-40 rounded-full bg-blue-500 blur-[140px] mt-72"></div>
        <div className="w-60 h-40 rounded-full bg-green-500 blur-[140px] mt-72 "></div>
        <div className="w-60 h-40 rounded-full bg-red-500 blur-[140px] mt-72"></div>
        <div className="w-60 h-80  rounded-lg  absolute left-0 bottom-[-5%] "><img src="https://edublink.co/images/elementor-panale.webp" alt="" /></div>
        <div className="w-60 h-80  rounded-lg  absolute right-10 bottom-[-5%] "><img src="https://edublink.co/images/iphone.webp" alt="" srcset="" /></div>
    </div>
    <div className="w-[700px] h-96  rounded-lg  absolute left-[50%] translate-x-[-50%]  bottom-[-5%] "> <img src="https://edublink.co/images/macbook-air.webp" alt="" srcset="" /></div>
    </header>
  )
}

export default Head
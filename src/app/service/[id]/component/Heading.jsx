import React from 'react'
import 'remixicon/fonts/remixicon.css';
const Heading = () => {
  return (
    <div className='pt-40 bg-[#ECF3F8] relative w-full py-10 h-[650px]'>
        <p className='text-center text-6xl font-bold max-w-[800px] mx-auto relative max-[800px]:text-5xl'>Pre-Made Inner Pages That Serve
        Your Purpose </p>
        <p className='text-center min-[700px]:w-[500px] max-[700px]:px-2 mx-auto py-5'>With a collection of 70 professionally designed inner pages
you can design your website more precisely.
</p>
<div className=" w-full flex justify-center items-center ">
<button className='mt-5 text-center mx-auto bg-[#1BB69B] text-white px-6 py-3 rounded-lg font-semibold text-xl '>Book Now →</button></div>
<div className="w-60 h-60 bg-green-200 blur-[80px] rounded-full absolute top-0 left-40"></div>
<div className="w-[500px] h-[500px] bg-white opacity-30 z-[1] rounded-full absolute top-[-50%] left-[-10%]"></div>
<img src="https://demo.edublink.co/wp-content/uploads/2023/05/girl-4.webp" className='w-60 absolute top-40 z-10 rounded-r-3xl left-[-30px]' alt="" srcset="" />
<img src="https://demo.edublink.co/wp-content/uploads/2023/05/girl-5.webp" className='w-72 absolute top-20 z-10 rounded-l-3xl right-[-90px]' alt="" srcset="" />
<img src="https://demo.edublink.co/wp-content/uploads/2023/05/girl-6.webp" className='w-40 absolute top-80 z-10 rounded-tl-3xl rounded-br-3xl rounded-bl-xl rounded-tr-xl right-[150px] shadow-2xl' alt="" srcset="" />

<div className=" flex flex-row gap-3 w-[340px] h-24 bg-white shadow-xl absolute top-[500px] left-20 justify-evenly items-center px-5 rounded-bl-[40px] rounded-tr-[40px] rounded-tl-xl rounded-br-lg"><i class="ri-phone-fill text-3xl flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-500"></i>
<h1 className='flex flex-col text-2xl font-bold cursor-pointer hover:text-green-400 text-red-500'><span className='text-zinc-400 text-sm font-semibold'>ONLINE BOOKING </span>+91 0987654321</h1>
</div>
    </div>
  )
}

export default Heading

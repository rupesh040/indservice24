import React from 'react'

const Zoom = () => {
  return (
    <div className='p-5 max-w-[1280px] mx-auto flex  justify-between relative items-center '>
        <div className=" w-[50%]">
            <span className='px-5 font-semibold py-2 rounded-2xl border-[1px] border-zinc-400'>Zoom Apps</span>
            <h1 className='text-5xl font-semibold py-3 '>Zoom Integration</h1>
            <p className='text-xl text-zinc-500 tracking-wide pt-5'>
            Zoom is integrated into EduBlink to help schools, organizations to enhance their online programs. Learners can access to online high-quality video sessions through desktop and mobile. You can simply connect with Zoom Meetings directly from your LMS.
            </p>
        </div>
        <div className="">
        <img src="https://edublink.co/images/macbook-air-2.webp" alt="" srcset="" /></div>
        <div className="w-[500px] h-[500px] bg-purple-300 blur-[150px] rounded-full bottom-[-5%] right-20 z-[-2] absolute"></div>
        <div className="w-[300px] h-[300px] bg-yellow-100 blur-[150px] rounded-full bottom-[-10%] left-[-10%] z-[-2] absolute"></div>
    </div>
  )
}

export default Zoom

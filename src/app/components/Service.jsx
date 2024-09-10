import React from 'react'
import Card from './Card'

const Service = () => {
  return (
    <div className='mt-40 bg-white relative w-full  z-10 py-10 overflow-hidden'>
        <h1 className='text-[300px] font-bold text-center text-[#F4F7F8] opacity-90 absolute  left-[50%] translate-x-[-50%] translate-y-[-50%] top-[8%] z-[-1] max-[1180px]:hidden '> Service</h1>
        <h1 className='text-[100px] text-center text-[#25B78A] z-20 font-bold'>22+</h1>
        <p className='text-center text-5xl font-bold max-w-[800px] mx-auto relative max-[800px]:text-3xl '>Pre-Made Creative Online Course
        Education Homepage <span className='w-40 h-10 bg-white opacity-80 absolute bottom-10 blur-[10px]'></span><span className='w-40 h-10 bg-white  absolute left-32 bottom-[-10px] blur-[20px]'></span></p>
        <p className='text-center w-96 mx-auto py-5'>Install any demo or template with a single click. You can mix
        and match all the demos and templates.</p>
        <div className=" flex flex-wrap justify-around gap-10 ">
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     </div>
    </div>
  )
}

export default Service

import React from 'react'

const Responsive = () => {
  return (
         <div className='p-5 max-w-[1280px] overflow-hidden mx-auto flex  justify-between relative items-center max-[1080px]:flex-col gap-10 my-40'>
        <div className=" w-[50%] max-[1080px]:w-full">
            <span className='px-5 font-semibold py-1 rounded-3xl border-[1px] border-zinc-400 max-[600px]:px-3'>Responsive</span>
            <h1 className='text-5xl font-semibold py-3 max-[600px]:text-4xl'>Responsive Layout for
            Any Device</h1>
            <p className='text-xl text-zinc-500 tracking-wide pt-5 max-[600px]:text-[17px] max-[600px]:tracking-normal'>
            Ensuring that EduBlink is fully compatible with various devices, including mobile phones, tablets, and small-screen laptops, means that users can access and navigate the educational content seamlessly across different platforms.
            </p>
            <img src="https://edublink.co/images/gadget.png"  className='my-10' alt="" srcset="" />
        </div>
        <div className=" relative">
        <img src="https://edublink.co/images/imac.png" alt="" srcset="" />
        <img src="https://edublink.co/images/iphone-1.png" className='absolute bottom-0 right-0 max-[600px]:w-40  ' alt="" srcset="" /></div>
        <div className="w-[500px] h-[500px] bg-purple-300 blur-[150px] rounded-full bottom-[-5%] right-20 z-[-2] absolute"></div>
        <div className="w-[300px] h-[300px] bg-yellow-100 blur-[150px] rounded-full bottom-[-10%] left-[-10%] z-[-2] absolute"></div>
    </div>
  )
}

export default Responsive

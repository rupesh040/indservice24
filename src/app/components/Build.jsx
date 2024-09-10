import React from 'react'

const Build = () => {
  return (
    <div className='p-5 max-w-[1280px] mx-auto flex  justify-between relative items-center max-[1080px]:flex-col gap-10 mt-20 overflow-hidden'>

    <div className=" relative">
    <img src="https://edublink.co/images/elamentor-01.png" alt="" srcset="" />
    <img src="https://edublink.co/images/elamentor-02.png" className='absolute bottom-[-10%] left-[-10%] max-[600px]:w-40  ' alt="" srcset="" /></div>
     <div className=" w-[50%] max-[1080px]:w-full">
        <span className='px-5 font-semibold py-1 rounded-3xl border-[1px] border-zinc-400 max-[600px]:px-3'>Build Visually</span>
        <h1 className='text-5xl font-semibold py-3 max-[600px]:text-4xl'>Drag & Drop Elementor
        Page Builder</h1>
        <p className='text-xl text-zinc-500 tracking-wide pt-5 max-[600px]:text-[17px] max-[600px]:tracking-normal'>
        EduBlink developed with the Elementor page builder plugin. It has 70+ unique pages containing a full education management system. The theme lets you build and manage an online enrollment system effortlessly.
        </p>
        <div className=" flex flex-wrap justify-between w-[70%]">
            <p className='flex flex-row items-center '> <img src="https://edublink.co/images/icon-1.svg" className='w-10 mt-3' alt="" srcset="" /> Drag and Drop Editor</p>
            <p className='flex flex-row items-center'> <img src="https://edublink.co/images/icon-1.svg" className='w-10 mt-3' alt="" srcset="" /> Drag and Drop Editor</p>
            <p className='flex flex-row items-center'> <img src="https://edublink.co/images/icon-1.svg" className='w-10 mt-3' alt="" srcset="" /> Drag and Drop Editor</p>
            <p className='flex flex-row items-center'> <img src="https://edublink.co/images/icon-1.svg" className='w-10 mt-3' alt="" srcset="" /> Drag and Drop Editor</p>
        </div>
    </div>
    <div className="w-[500px] h-[500px] bg-green-100 blur-[150px] rounded-full bottom-[-5%]  z-[-2] absolute left-[-10%]"></div>
    <div className="w-[300px] h-[300px] bg-yellow-100 blur-[150px] rounded-full bottom-[-10%] right-20  z-[-2] absolute"></div>
</div>
  )
}

export default Build

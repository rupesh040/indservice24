import React from 'react'

const Scard = () => {
  return (
    <div className="w-96 ">
    <div className='w-96 h-60 flex items-center justify-center rounded-3xl p-4 bg-[#FAE2DD] relative'>
        <img src="https://edublink.co/images/feature/feature-01.webp" alt="" srcset="" />
        <img src="https://edublink.co/images/feature/feature-02.webp" alt="" className='absolute right-5 w-[70px] animate-bounce ' />
    </div>
    <h1 className='text-3xl font-semibold max-w-[80%] text-center mx-auto'>Front-end Real-time
Editing</h1>
    <p className='max-w-[80%] text-center mx-auto'>
    Build stunning pages just with these drag & drop builders and 50+ custom widgets exclusively</p>
    </div>
  )
}

export default Scard

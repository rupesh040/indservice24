import React from 'react'

const Card = () => {
  return (
    <div className='w-[400px] p-7 rounded-xl  bg-white shadow-[0_0px_60px_-15px_rgba(0,0,0,0.1)]  hover:shadow-[0_10px_60px_-15px_rgba(0,0,0,0.2)] hover:translate-y-[-20px] transition-all ease-in-out'>
      <img src="https://edublink.co/images/pv-demo/home-01.webp" alt="" srcset="" className='cursor-pointer' />
      <h1 className='text-2xl font-bold text-zinc-800 pt-5 hover:text-green-700 cursor-pointer transition-all ease-in-out'>EduBlink Education</h1>
      <p className='font-semibold text-zinc-400'>Main Demo</p>
    </div>
  )
}

export default Card

import Link from 'next/link'
import React from 'react'
import 'remixicon/fonts/remixicon.css';
const Video = () => {
  return (
    <>
     <h1 className='text-5xl font-bold max-w-[900px] mt-20 text-[#141417] tracking-wide mb-2 text-center mx-auto'>The Ultimate Solution for Education & Online Course</h1>
     <p className=' max-w-[600px] text-xl font-normal text-zinc-500 tracking-wide text-center mx-auto'>You can create, edit, and customize your website visually and
     see the changes instantly</p>
     <div className="relative">
     <video src="https://edublink.co/images/placeholder-video.mp4" autoPlay loop muted className='border-[20px] border-white w-[80%] max-w-[1280px] mx-auto mt-16 rounded-3xl shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] mb-20'></video>
<Link href="#" className='w-20 h-20 play absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full text-white flex justify-center items-center'><i class="ri-play-fill text-white text-3xl"></i></Link>
     </div>

    </>
  )
}

export default Video

import React from 'react'

const View = () => {
  return (
    <div className="relative overflow-hidden pb-10">
    <div className='max-w-[1280px] mx-auto pt-16 z-[6] pl-5'>
      <h1 className='text-5xl font-bold text-[#141417] my-5  z-[6]'>What Makes Edu<span className='font-light'>Blink</span> Stand Out?</h1>
      <p className='text-2xl w-[60%] font-medium text-zinc-500  z-[6]'>EduBlink offers much more than any other Education & Online Course
      WordPress Theme</p>
    </div>
    <div className="w-full max-w-[1280px] mx-auto flex flex-row justify-between  mt-10 z-[5] max-[1180px]:flex-col max-[1180px]:items-center">
        <div className=" w-[65%] h-[100%] gap-10 flex flex-col justify-between z-[5] max-[1180px]:w-[95%] ">
            <div className="rounded-3xl   shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)]  flex justify-between z-[5] bg-white">
                <div className="p-10 ">
                    <span className='font-bold text-xl '> <span className='border-l-[4px]  border-green-400 text-green-500 pl-4'>22+</span>Home Pages</span>
                    <h1 className='text-4xl font-bold py-10'>Take Your Website to
                    The Next Level From Huge Collection</h1>
                    <p  className='text-zinc-400 text-xl'>Build a clean website to get an online presence and landing pages to attract more customers.</p>
                </div>
            <img src="https://edublink.co/images/exlpore/explore-01.webp" className='max-[1000px]:hidden w-[250px]' alt="" /></div>
            <div className="w-full h-[45%] flex justify-between flex-wrap gap-5 max-[1180px]:justify-center ">
                <div className=" h-[100%] w-[400px] bg-white rounded-3xl shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] px-10 pt-5">
                    <h1 className='text-3xl font-bold pt-5'>Huge Typography Options</h1>
                    <p className=' py-5'>The most popular collection of 1000+ free Google fonts.</p>
                    <img src="https://edublink.co/images/exlpore/explore-03.webp" className='' alt="" srcset="" />
                </div>
                <div className="h-[100%] w-[400px] bg-white rounded-3xl shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] flex items-center justify-center flex-col py-5">
                    <img src="https://edublink.co/images/exlpore/explore-05.webp" className='p-5' alt="" />
                    <h1 className='font-bold text-3xl ml-16'>Ultra Fast Speed Performance</h1>
                </div>
            </div>
        </div>
        <div className=" w-[30%] max-[1180px]:w-[95%] max-[1180px]:mt-10  h-full py-5 bg-white rounded-3xl px-8 shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] relative items-center flex flex-col">
            <h1 className='text-3xl font-bold text-center  pt-16 max-[1180px]:text-4xl max-[1180px]:w-[80%] max-[1180px]:mx-auto'>Explore A Never Ending Palette of Colors</h1>
            <p className='text-center py-3 max-[1180px]:w-[70%]'>Say goodbye to static designs. EduBlink offers infinite color variations to keep your website dynamic and fresh.</p>
            <img src="https://edublink.co/images/exlpore/explore-08.png" className='shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] absolute top-[45%] left-[20%]' alt="" srcset="" />
            <img src="https://edublink.co/images/exlpore/explore-06.png" className=' animate-bounce  absolute top-[40%] left-[63%]' alt="" />
            <img src="https://edublink.co/images/exlpore/explore-04.webp" alt="" className='mt-40' srcset="" />
        </div>
    </div>
    <div className="w-80 h-80 bg-pink-300 blur-[150px] rounded-full top-32 z-[2] absolute"></div>
    <div className="w-96 h-96 bg-green-200 blur-[150px] rounded-full top-32 right-40 z-[-1] absolute"></div>
    <div className="w-[500px] h-[500px] bg-purple-300 blur-[150px] rounded-full bottom-[-5%] right-20 z-[-2] absolute"></div>
    <div className="w-[500px] h-[500px] bg-yellow-100 blur-[150px] rounded-full bottom-[-10%] left-0 z-[-2] absolute"></div>
    </div>
  )
}

export default View

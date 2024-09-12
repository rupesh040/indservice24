import React from 'react'

const Slide = () => {
  return (
    <div className='w-full overflow-hidden flex flex-shrink-0 flex-nowrap '>
        <div className="flex flex-nowrap m-4 gap-10 items-center justify-center text-center text-2xl slides flex-shrink-0">
            <div className="w-60 h-40 bg-purple-300 flex-shrink-0">1</div>
            <div className="w-60 h-40 bg-purple-300">2</div>
            <div className="w-60 h-40 bg-purple-300">3</div>
            <div className="w-60 h-40 bg-purple-300">4</div>
            <div className="w-60 h-40 bg-purple-300">5</div>
        </div>
        <div className="flex flex-nowrap m-4 gap-10 items-center justify-center text-center text-2xl slides">
            <div className="w-60 h-40 bg-purple-300">6</div>
            <div className="w-60 h-40 bg-purple-300">7</div>
            <div className="w-60 h-40 bg-purple-300">8</div>
            <div className="w-60 h-40 bg-purple-300">9</div>
            <div className="w-60 h-40 bg-purple-300">10</div>
        </div>
    </div>
  )
}

export default Slide

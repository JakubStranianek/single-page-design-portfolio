import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import leftArr from "../../assets/left_arrow.png"
import rightArr from "../../assets/right_arrow.png"

export default function MyWork() {
  return (
    <div className='pt-24 mr-auto ml-auto'>
        <h1 className='text-[24px] font-bold text-center'>My Work</h1>

        {/* Carousel container */}
        <div className='mt-8'>
           <div className='bg-work1 w-full h-[180px] bg-cover bg-no-repeat'></div>
           <div className='bg-work2 w-full h-[180px] bg-cover bg-no-repeat'></div>
           <div className='bg-work3 w-full h-[180px] bg-cover bg-no-repeat'></div>
           <div className='bg-work4 w-full h-[180px] bg-cover bg-no-repeat'></div>
           <div className='bg-work5 w-full h-[180px] bg-cover bg-no-repeat'></div>
        </div>

        {/* Prev next buttons */}
        <div className='flex justify-center'>
            <button className='bg-myBlack border-none w-16 h-16 rounded-full flex items-center justify-center'>
                <img src={leftArr} alt="leftArrow"/>
           </button> 

            <button className='bg-myBlack border-none w-16 h-16 rounded-full flex items-center justify-center'>
                <img src={rightArr} alt="rightArrow"/>
            </button> 
        </div>
    </div>
  )
}

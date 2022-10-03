import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import leftArr from "../../assets/left_arrow.png"
import rightArr from "../../assets/right_arrow.png"
import work1 from "../../assets/work1.png"
import work2 from "../../assets/work2.png"
import work3 from "../../assets/work3.png"
import work4 from "../../assets/work4.png"
import work5 from "../../assets/work5.png"

export default function MyWork() {
  const images = [work1, work2, work3, work4, work5]; 

  return (
    <div className='pt-24 mr-auto ml-auto'>
        <h1 className='text-[24px] font-bold text-center'>My Work</h1>

        {/* Carousel container */}
        <div className='mt-8 flex justify-center items-center overflow-x-hidden'>
          {images.map(index => 
           <img src={index} alt={index} width="270px" className='mr-2 ml-2 w-[270px] md:w-[540px]'/>
          )}
        </div>

        {/* Prev next buttons */}
        <div className='flex justify-center pt-8'>
            <button className='bg-myBlack border-none w-16 h-16 rounded-full flex items-center justify-center mr-2 lg:hover:bg-myPurple'>
                <img src={leftArr} alt="leftArrow"/>
           </button> 

            <button className='bg-myBlack border-none w-16 h-16 rounded-full flex items-center justify-center ml-2 lg:hover:bg-myPurple'>
                <img src={rightArr} alt="rightArrow"/>
            </button> 
        </div>
    </div>
  )
}

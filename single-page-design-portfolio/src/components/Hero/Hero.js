import React from 'react'
import grid1 from "../../assets/grid1.png"
import grid2 from "../../assets/grid2.png"
import grid3 from "../../assets/grid3.png"
import grid4 from "../../assets/grid4.png"
import grid5 from "../../assets/grid5.png"
import grid6 from "../../assets/grid6.png"
import amy from "../../assets/amy.png"

export default function Hero() {
  return (
    <div className='w-11/12 mr-auto ml-auto pt-8 lg:pt-16'>
        <h1 className='text-3xl font-bold text-center text-myBlack md:text-[44px] lg:text-headingL'>Design solutions made easy</h1>
        <p className='w-4/5 mr-auto ml-auto text-xs text-myGrey text-center leading-[26px] pt-4 md:text-body md:pt-7 lg:w-2/5'>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
    
        <section className='grid grid-cols-2 gap-6 pt-8 md:grid-cols-4 md:grid-rows-3 lg:w-4/5 lg:mr-auto lg:ml-auto lg:grid-cols-6 lg:grid-rows-2'>
            <div className='bg-myPurple col-span-2 h-[343px] relative rounded-lg md:col-span-2 md:row-span-2 md:h-auto'>
                <img src={grid1} alt="Graphic Design" className='absolute top-6 right-6'/>
                <h1 className='text-white text-[24px] font-bold absolute bottom-6 left-6'>Graphic Design</h1>
            </div>
            <div className='bg-myOrange col-span-1 h-[182px] relative rounded-lg md:col-span-1 md:row-span-1 '>
                <img src={grid2} alt="UI/UX" className='absolute top-6 right-6'/>
                <h1 className='text-white text-[24px] font-bold absolute bottom-6 left-6'>UI/UX</h1>
            </div>
            <div className='bg-myPink col-span-1 h-[182px] relative rounded-lg md:col-span-1 md:row-span-1 '>
                <img src={grid3} alt="Apps" className='absolute top-6 right-6'/>
                <h1 className='text-white text-[24px] font-bold absolute bottom-6 left-6'>Apps</h1>
            </div>
            <div className='bg-myPeach col-span-2 h-[158px] relative rounded-lg md:col-span-2 md:row-span-1 md:h-auto'>
                <img src={grid4} alt="Illustrations" className='absolute top-6 right-6'/>
                <h1 className='text-white text-[24px] font-bold absolute bottom-6 left-6'>Illustrations</h1>
            </div>
            <div className='bg-myTirkis col-span-2 h-[158px] relative rounded-lg md:col-span-2 md:row-span-1 lg:h-full'>
                <img src={grid5} alt="Photography" className='absolute top-6 right-6'/>
                <h1 className='text-white text-[24px] font-bold absolute bottom-6 left-6'>Photography</h1>
            </div>
            <div className='bg-myWine col-span-2 h-[158px] relative rounded-lg md:col-span-2 md:row-span-1 lg:h-full'>
                <img src={grid6} alt="Motion Graphics" className='absolute top-6 right-6'/>
                <h1 className='text-white text-[24px] font-bold absolute bottom-6 left-6'>Motion Graphics</h1>
            </div>
        </section>

        {/* AMY Section */}
        <section className='pt-24 flex items-center justify-center relative flex-col md:flex-row lg:w-4/5 lg:mr-auto lg:ml-auto'>
            <img src={amy} alt="amyGirl" className='md:relative md:-left-16 lg:left-0 lg:w-[445px]'/>

        <div className='flex flex-col items-center text-center md:items-start md:text-left md:pl-16 lg:pl-[125px]'>
            <h1 className='text-[26px] font-bold pt-10 md:text-headingS lg:text-headingM'>I’m Amy, and I’d love to work on your next project</h1>
            <p className='text-base text-myGrey pt-6 pb-6 md:text-body'>I love working with others to create beautiful design solutions. 
                I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>

            <a href='localhost:3000' className='bg-myPeach flex justify-center w-[176px] pt-4 pb-4 text-myWhite rounded-4-xl text-xs font-bold hover:bg-myOrange transition-all md:w-[228px]'>Free Consultation</a>
        </div>
        </section>
    </div>
  )
}

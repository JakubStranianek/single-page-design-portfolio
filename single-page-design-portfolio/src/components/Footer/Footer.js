import React from 'react'
import Header from "../Header/Header"
export default function Footer() {
  return (
    <div>
        {/* SECTION PREFOOTER */}
        <section className='w-11/12 mr-auto ml-auto rounded-lg mt-20 bg-myBlack text-center flex flex-col items-center justify-center lg:flex-row lg:w-4/5 lg:text-left lg:justify-around'>
            <div className='w-4/5 pt-12 lg:w-3/5 lg:pt-20'>
                <h1 className='text-white text-2xl font-bold md:text-headingS lg:text-headingM'>Book a call with me</h1>
                <p className='text-white pt-6 text-base leading-8 md:text-body lg:pb-12'>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
            </div>

            <div className='pt-6 pb-12 lg:pt-12 lg:pb-0'>
                <a href='localhost:3000' className='bg-myPeach flex justify-center w-[176px] pt-4 pb-4 text-myWhite rounded-4-xl text-xs font-bold lg:hover:bg-myOrange transition-all md:w-[228px]'>Free Consultation</a>
            </div>
        </section>

         {/* SECTION FOOTER */}

         <footer className='mt-14 pb-16'>
            <Header/>
         </footer>
    </div>
  )
}

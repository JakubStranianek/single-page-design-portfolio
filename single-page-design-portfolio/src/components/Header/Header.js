import React from 'react'
import logo from "../../assets/header-logo.svg"

export default function Header() {
  return (
    <header className='w-11/12 flex justify-between items-center ml-auto mr-auto pt-8 lg:w-4/5'>
            <img src={logo} alt="header-logo" className='w-16'/>
            <a href='localhost:3000' className='bg-myBlack pr-11 pl-11 pt-4 pb-4 text-myWhite rounded-4-xl text-xs font-bold hover:bg-myPurple transition-all'>Free Consultation</a>
    </header>
  )
}

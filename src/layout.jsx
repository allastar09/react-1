import React from 'react'
import { Link, Outlet } from 'react-router';
import logo from './assets/Logo.png'

const Layout = () => {
  return (
    <div>
      <nav className='flex gap-[20px] p-[30px] bg-black text-[white] items-center justify-between'>
        <img src={logo} alt="" />
        <Link to={"/"} className='ml-[20px]'>Home</Link >
        <Link to={'/about'}>About</Link>
        <button className='w-[200px] h-[50px] rounded-2xl text-[white] bg-[#0A84FF] text-center'>Contact Us</button>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Layout
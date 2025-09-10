import React, { useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo.png'
import { CiMenuFries } from "react-icons/ci";
import { MdPlaylistRemove } from "react-icons/md";


const ResNav = () => {
  const [showNav,setShowNav] = useState(false)




  return (
    <>
    <nav className='lg:hidden px-2 py-3  overflow-x-clip absolute top-0 left-0 w-full z-20 '>
      <div className="container ">
        <div className="menu_row flex justify-between items-center ">
          <Link to={"/"} className='logo inline-block w-[120px]'><img src={logo} alt="logo" /></Link>
                <button onClick={()=>setShowNav(!showNav)} className='text-2xl text-white'><CiMenuFries /></button>
            </div>
        </div>
       {
         showNav&&
         <div onClick={()=>setShowNav(!showNav)} className='w-full h-screen  absolute top-0 left-0'></div>
       }
        <div className={`w-[190px] h-screen bg-white   absolute top-0 ${showNav? "right-0":"right-[-100%]"} duration-[.4s] flex justify-center items-center flex-col   `}>
          <button onClick={()=>setShowNav(!showNav)} className='text-2xl absolute top-5 right-5'>
            <MdPlaylistRemove />

          </button>
          <ul className='flex flex-col gap-5'>
            <li><Link className='text-lg font-dm text-black' to={'/'}>Home</Link></li>
            <li><Link className='text-lg font-dm text-black' to={'/'}>About</Link></li>
            <li><Link className='text-lg font-dm text-black' to={'/'}>Contact Us</Link></li>
          </ul>
          <Link className='py-2 px-6 bg-black text-base font-normal font-dm text-white rounded-[5px] mt-5' to={'/'}>Get in touch</Link>
        </div>
        













    </nav>
    </>
  )
}

export default ResNav
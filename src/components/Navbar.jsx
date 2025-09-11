import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { IoMdArrowDropup } from "react-icons/io";


const Navbar = () => {
  const navItem = [
    {
      navContent : "Home",
      navLink : '/'
    },
    {
      navContent : "About",
      navLink : '/'
    },
    {
      navContent : "Contact Us",
      navLink : '/',
      dropDown: [
        {
          dropContent:'google maps',
          dropLink:'/'
        },
        {
          dropContent:'Phone Number',
          dropLink:'/'

        },
      ]
    },
  ]





  return (
    <>
    <nav id='mynavbar' className='w-full pt-[22px] hidden lg:block absolute top-0 left-0 z-2'>
      <div className="container">
        <div className="menu_row flex justify-between items-center">
          <Link to={'/'} className="logo_col ">
            <img src={logo} alt="logo" />
          </Link>
          <div className="menu_items flex gap-[35px] ">
            {
              navItem.map((item, i)=>{
                return(
                  <ul key={i}>
                    <li className='relative group'>

                    <Link key={i} className='text-xl font-normal text-primary font-dm' to={item.navLink}>{item.navContent}</Link>


                    {
                      item.dropDown&&
                    <div className='w-[300px] p-3 rounded-[5px] bg-white absolute top-8 invisible opacity-0 group-hover:visible group-hover:opacity-100'>
                      <IoMdArrowDropup className='text-2xl text-white absolute top-[-15px] left-5 ' />

                      <ul>
                        {
                          item.dropDown.map((item, i)=>(
                            <li key={i}><Link className='text-lg mb-4 inline-block ' to={item.dropLink}>{item.dropContent}</Link></li>
                   ))}
                    </ul>
                           </div>
                     }
                        </li>
                        </ul>
                        )
                         })
                           }
                         </div>
                          <button className='w-[147px] h-[47px] bg-primary hover:bg-brand rounded-[23px] text-lg font-dm font-normal text-[#0C0C0CE5]'>
                             Get in touch</button>  
                                </div>
                             </div>
                           </nav>
                          </>
                        )
                       }
                         export default Navbar
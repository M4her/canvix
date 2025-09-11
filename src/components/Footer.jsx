import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";






const Footer = () => {
  return (
    <>
    <footer id='footer' className='w-full bg-secondary border-[1px] border-[#F4F4F4]'>
        <div className="container">
            <div className="footer_row">
                <div className='flex  gap-[105px] mt-[100px]'>

            <div className=' '>
            <Link to={'/'} className="logo_col">
            <img src={logo} alt="logo" />
          </Link>
          <p className='w-full lg:w-[357px] text-[18px] text-[#ffffff] font-dm font-normal mt-[76px]'>
            We’re a team of strategic creator and
             digital innovator, united focus in our pursuit
              of mastery and joyful.</p>
          </div>
          <div className='pages   '>
            <h2 className='w-[58px] text-[20px] text-[#ffffff] font-roboto font-semibold mb-[24px]'>Pages</h2>
            <ul className=''>
                <li className='flex flex-col '>
                    <Link className=' text-[16px] text-[#f4f4f4] font-dm font-normal ' href="href">Home</Link>
                    <Link className=' text-[16px] text-[#f4f4f4] font-dm font-normal mt-[16px] ' href="href">Home 2</Link>
                    <Link className=' text-[16px] text-[#f4f4f4] font-dm font-normal mt-[16px] ' href="href">About</Link>
                    <Link className=' text-[16px] text-[#f4f4f4] font-dm font-normal mt-[16px] ' href="href">Conatct Us </Link>
                    <Link className=' text-[16px] text-[#f4f4f4] font-dm font-normal mt-[16px] ' href="href">Portfolio</Link>
                    <Link className=' w-[118px] text-[16px] text-[#f4f4f4] font-dm font-normal mt-[16px] ' href="href">Portfolio Single</Link>
                </li>
            </ul>

          </div>

          <div className=' ml-[105px]   '>
            <h2 className=' text-[20px] text-[#ffffff] font-roboto font-semibold mb-[24px]'>Utility Pages </h2>
            <ul className=''>
                <li className='flex flex-col '>
                    <Link className=' text-[16px] text-[#f4f4f4] font-dm font-normal ' href="href">Style Guide </Link>
                    <Link className=' text-[16px] text-[#f4f4f4] font-dm font-normal mt-[16px] ' href="href">Instruction</Link>
                    <Link className=' text-[16px] text-[#f4f4f4] font-dm font-normal mt-[16px] ' href="href">License</Link>
                    <Link className=' text-[16px] text-[#f4f4f4] font-dm font-normal mt-[16px] ' href="href">Changelog </Link>
                    <Link className=' text-[16px] text-[#f4f4f4] font-dm font-normal mt-[16px] ' href="href">Error  404 </Link>
                    <Link className=' w-[157px] text-[16px] text-[#f4f4f4] font-dm font-normal mt-[16px] ' href="href">Password Protected </Link>
                </li>
            </ul>

          </div>
          
          <div className=''>
            <h2 className='text-[20px] text-[#ffffff] font-roboto font-semibold mb-[19px]'>Subscribe</h2>
                <div class="relative  ">
        <input type="email" placeholder="Enter your email here" class=" w-[433px] h-[67px] px-[23px] py-[22px]border-none rounded-[40px] bg-[#ffffff]  "/>
        <button class="absolute top-[10px] left-[305px] py-2 px-[15px] rounded-[20px] bg-secondary text-white text-[18px] font-normal font-dm w-[118px]  gap-[10px] ">
          Subscribe

        </button>
          </div>
 
          </div>
                </div>

                <div className="w-full border-t border-[#f4f4f4] mt-[102px]"></div>


               <div className='flex gap-[181px] mt-[29px] mb-[60px]'>

              <div className=' '>
              <h2 className='w-[131px] text-[20px] text-[#f4f4f4] font-semibold font-roboto'>Copyright by</h2>
       
           <p className='w-full lg:w-[211px] text-base  text-[#f4f4f4] font-dm font-normal mt-[16px]'>
                    Designed by Iconstica.com</p>
                  </div>

                      <div className=' '>
              <h2 className='w-[131px] text-[20px] text-[#f4f4f4] font-semibold font-roboto'>Contact Us</h2>
       
              <p className='w-full lg:w-[211px] text-base  text-[#f4f4f4] font-dm font-normal mt-[16px]'>
               +0 12 457 4578</p>
               </div>


                <div className=' '>
                 <h2 className='w-[131px] text-[20px] text-[#f4f4f4] font-semibold font-roboto'> Address </h2>
       
             <p className='w-full lg:w-[320px] text-base  text-[#f4f4f4] font-dm font-normal mt-[16px]'>
                  119 Tanglewood Lane Gulfport, MS 39503</p>
              </div>


          <div className='w-[208px] gap-[29px] flex items-center'>
            <div className='w-[50px] h-[50px]  rounded-full bg-primary flex justify-center items-center'>
              <FiFacebook  className='text-secondary text-3xl ' />
            </div>

            <div className='w-[50px] h-[50px]  rounded-full bg-primary flex justify-center items-center'>
              <FaInstagram  className='text-secondary text-3xl ' />
            </div>

            <div className='w-[50px] h-[50px]  rounded-full bg-primary flex justify-center items-center'>
              <CiLinkedin className='text-secondary text-3xl ' />
            </div>



          </div>


          </div>

          </div>
          </div>
        </footer>
           </>
  )
}

export default Footer
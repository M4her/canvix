import React from 'react'
import bannerOverlay from '../assets/images/bannerOverlay.png'
import bannerPat from '../assets/images/bannerPat.png'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import brand1 from '../assets/images/brand1.png'
import brand2 from '../assets/images/brand2.png'
import brand3 from '../assets/images/brand3.png'
import brand4 from '../assets/images/brand4.png'
import bannerCircleImage from '../assets/images/bannerCircleImage.png'



const Banner = () => {
  return (
          <section className='bg-[#0C0C0C] pt-[102px] pb-[86px] px-3 lg:px-0 relative z-1'>
          {/* overlays */}
           <div style={{background:`url(${bannerOverlay})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }} 
          className='w-full h-full absolute top-0 left-0 z-[-1]'>
           </div>
            <div className="w-[183px] absolute top-[178px] left-0 hidden lg:block ">
             <img src={bannerPat} alt="bannerPattern" />
                 </div>
                 {/* banner contents */}

                <div className="container">
                  <div className="banner_row flex not-lg:flex-wrap " >
                   <div className="banner_text">
                   <h1 className='lg:text-[64px] text-[30px] font-semibold font-roboto text-primary w-full lg:width-[608px] '>
                  Ready to take your
                 <span className='text-brand block'>Business Growth </span>
                    to the next level?
                    </h1>
                    <p className='w-full lg:w-[551px] text-sm lg:text-lg font-dm font-normal text-primary mt-6 mb-8'>
                      Lorem ipsum dolor
                         sit amet, consectetur adipiscing
                      elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.
                      </p>
                      {/* button css */}
                   <button class=" relative inline-block p-px  font-normal font-dm  leading-6 text-[#0C0C0CE5] bg-white shadow-2xl cursor-pointer rounded-[23px] shadow-zinc-900
                       transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                        <span
                          class="absolute inset-0 rounded-[23px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          ></span>

                          <span class="relative z-10 block px-6 py-3 rounded-[23px] bg-white">
                          <div class="relative z-10 flex items-center gap-[10px]"><IoIosArrowDroprightCircle className='text-[28px]'/>
                     <span class="transition-all duration-500 group-hover:translate-x-1">Start your Free Trial</span>
                           </div>
                              </span>
                                   </button>
                                     {/* button css end */}
                <p className='text-xl font-semibold font-roboto text-brand mt-[40px] lg:mt-[181px] '>Trusted by Leading Brands</p>
                   <div className='flex flex-wrap gap-[10px] mt-[13px]'>
                    <img className='w-[147px]' src={brand1} alt="brand1" />
                    <img className='w-[147px]' src={brand2} alt="brand2" />
                    <img className='w-[147px]' src={brand3} alt="brand3" />
                    <img className='w-[147px]' src={brand4} alt="brand4" />

                   </div>



                    </div>
                    <div className="bannerCircleImage w-[300px] lg:w-[850px] justify-between  ">
                     <img src={bannerCircleImage} alt="bannerimg" />

                    </div>
                  </div>
                 </div>
 
            </section>
   )
}

export default Banner
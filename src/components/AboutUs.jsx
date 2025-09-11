import React from 'react'
import aboutUsPic from '../assets/images/aboutUsPic.png'
import { IoIosArrowDroprightCircle } from "react-icons/io";




const AboutUs = () => {
  return (


    <section id='aboutUs' className='bg-[#0C0C0C] w-full pt-[100px] pb-[100px]' >
        <div className='container'>

        <div className='aboutUs_row flex flex-wrap '>
            <div className="aboutsUsPicture w-full lg:w-[744px]  justify-between items-center  ">
                <img src={aboutUsPic} alt="aboutsUsPicture" />

        </div>
        <div className='aboutUs_text ml-[21px]  lg:ml-[70px] mt-[78px]  '>
            <h2 className='text-[30px] font-semibold font-roboto text-brand w-full lg:w-[134px]  mb-[25px]'>About us </h2>
            <h3 className='w-full lg:w-[586px] text-primary text-[30px] lg:text-[64px] font-semibold font-roboto'>The core mission behind all our work</h3>
            <p className='w-full lg:w-[568px] text-primary text-sm lg:text-lg font-normal font-dm mt-[25px]'>
                Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit metus
                  ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>

                  <div className='flex  mt-[25px]'>

                    <div className=" mr-[135px] lg:mr-[94px]">
                      <h2 className='w-full lg:w-[112px] text-brand lg:text-[45px] font-semibold font-roboto '>330
                    <span className='relative align-baseline ml-2 lg:text-[45px] top-[-4px]'>+</span>
                    </h2>
                    </div>



                  <div>
                    <h2 className='w-full lg:w-[112px] text-brand text-[25px] lg:text-[45px] font-semibold font-roboto '>230
                    <span className='relative align-baseline ml-2 lg:text-[45px] top-[-4px]'>+</span>
                      </h2>

                  </div>
                  </div>

                  <div className='flex gap-[59px]'>

                  <p className='w-full lg:w-[147px] text-primary lg:text-[16px] font-normal font-dm '>Companies helped</p>
                  <p className='w-full lg:w-[150px] text-primary lg:text-[16px] font-normal font-dm'>Revenue generated</p>
                  </div>

                  {/* button css */}
                  <button class="mt-[43px]  relative inline-block p-px  font-normal font-dm  leading-6 text-[#0C0C0CE5] bg-white shadow-2xl cursor-pointer rounded-[23px] shadow-zinc-900
                   transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                     <span class="absolute inset-0 rounded-[23px] bg-gradient-to-r from-teal-400 via-blue-500
                      to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      ></span>
                      <span class="relative z-10 block px-6 py-3 rounded-[23px] bg-white">
                        <div class="relative z-10 flex items-center gap-[10px]"><IoIosArrowDroprightCircle className='text-[20px]'/>
                        <span class="transition-all duration-500 group-hover:translate-x-1">Start your Free Trial</span>
                        </div>
                        </span>
                          </button>











        </div>


        </div>
        </div>

    </section>
  )
}

export default AboutUs
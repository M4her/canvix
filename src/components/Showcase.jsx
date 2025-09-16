import React from 'react'
import CommonHead from './common/CommonHead'
import ShowCaseCard from './common/ShowCaseCard'
import Firstpic    from  '../assets/images/Rectangle 20.png'
import Secondpic    from  '../assets/images/Rectangle 22.png'
import Thirdpic    from  '../assets/images/Rectangle 21.png'
import Forthpic    from  '../assets/images/Rectangle 23.png'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Showcase = () => {
  return (
    <>
    <section id='showCase' className='mt-[60px] lg:mt-[129px]'>
        <div className="container">
            <CommonHead commonContent2={'Recent Showcase'} />

            <div className='flex flex-wrap justify-between mt-[85px]'>
                <div>
                    <ShowCaseCard  showcaseImage={Firstpic}
                    showcaseHead={'Web UI design'} showcaseP={'Creative  UI design'}/>

                     <ShowCaseCard marginTopValue={'mt-[88px]'} showcaseImage={Secondpic}
                    showcaseHead={'UI Design'} showcaseP={'Creative Rebranding for logo'}/>

                </div>


                <div className=' '>


                <div className=' mt-[40px] ml-[420px]'>


                {/* button css */}
                <button class=" relative inline-block p-px  font-normal font-dm  leading-6 text-primary bg-secondary shadow-2xl cursor-pointer rounded-[23px] shadow-zinc-900
                   transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ">
                  <span
                    class="absolute inset-0 rounded-[23px] bg-gradient-to-r from-teal-
                     via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                     </span>

                    <span class="relative z-10 block px-6 py-3 rounded-[23px] bg-secondary">
                  <div class="relative z-10 flex items-center gap-[10px]"><IoIosArrowDroprightCircle className='text-[28px]'/>
                   <span class="transition-all duration-500 group-hover:translate-x-1">Start your Free Trial</span>
                    </div>
                  </span>
                    </button>
                     {/* button css end */}
                     </div>



                     <ShowCaseCard marginTopValue={'mt-[93px]'}  showcaseImage={Thirdpic}
                    showcaseHead={'To design Digital Strategy'} showcaseP={'Social Media Marketing'}/>

                     <ShowCaseCard marginTopValue={'mt-[93px]'} showcaseImage={Forthpic}
                    showcaseHead={'UI Design'} showcaseP={'Creative Rebranding for logo'}/>

                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Showcase
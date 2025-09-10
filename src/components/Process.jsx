import React from 'react'
import CommonHead from './common/CommonHead'
import ProcessCard from './common/ProcessCard'
import { HiOutlineLightBulb } from 'react-icons/hi2'
import { TbMail } from 'react-icons/tb'
import { RiEqualizerLine } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";





const Process = () => {
  return (
    <>
    <section id='process' className='px-2 lg:px-0'>
        <div className="container">
            <CommonHead commonContent1={'Process'} commonContent2={'Process that moves things forward'} />
            <div className='flex flex-wrap justify-center lg:justify-between items-center gap-5 lg:gap-0 mt-[60px] lg:mt-[84px] '>

                <ProcessCard processIcon={<HiOutlineLightBulb className='text-xl lg:text-4xl text-primary '/> }
                 processHead={'Ideate'} processP={'The ideation process is a crucial phase in the design process where creative thinking and brainstorming'}/>

                  <ProcessCard processIcon={<TbMail className='text-xl lg:text-4xl text-primary '/> }
                 processHead={'Reserach'} processP={'Research is a critical component of the design process, helping designers understand the problem'}/>

                  <ProcessCard processIcon={<RiEqualizerLine className='text-xl lg:text-4xl text-primary '/> }
                 processHead={'Create'} processP={'Designing a process involves several key steps to ensure clarity, efficiency, successful implementation'}/>

                  <ProcessCard processIcon={<IoCheckmarkDoneCircleOutline className='text-xl lg:text-4xl text-primary '/> }
                 processHead={'Testing'} processP={'Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements'}/>




              

            </div>

        </div>
    </section>
    </>
  )
}

export default Process
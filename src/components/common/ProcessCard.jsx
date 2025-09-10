import React from 'react'
import { TfiLightBulb } from 'react-icons/tfi'


const ProcessCard = ({processIcon , processHead, processP}) => {
  return (
    <>
    <div className='w-[227px]'>


    <div className='flex items-center gap-5 lg:gap-[29px] lg:ml-[22px]'>
        <div className='w-[50px] h-[50px] lg:w-[82px] lg:h-[82px] rounded-full bg-secondary flex justify-center items-center '>
            {processIcon}
        </div>
        <h2 className='text-[16px] lg:text-[20px] text-secondary font-semibold font-roboto'>{processHead}</h2>
    </div>
    <p className='w-[190px] text-[12px] lg:text-base text-secondary font-dm font-normal mt-[32px]'>
        {processP}
          </p>

    </div>
    </>
  )
}

export default ProcessCard
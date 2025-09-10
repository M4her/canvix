import React from 'react'

const CommonHead = ({commonContent1, commonContent2}) => {
  return (
    <>
    <h3 className='text-xl lg:text-[30px] font-roboto font-normal text-brand text-center mt-[107px] '> {commonContent1}  </h3>
    <h2 className='lg:w-[695px] lg:text-[64px] font-roboto font-semibold text-[29px] text-[#000] text-center m-auto'>{commonContent2} 
        </h2>
        
        </>
  )
}

export default CommonHead
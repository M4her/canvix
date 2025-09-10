import React from 'react'

const ShowCaseCard = ({showcaseImage , showcaseHead , showcaseP,  marginTopValue }) => {
  return (
    <>
    <div className={`${marginTopValue}`}>

    <div className='w-full lg:w-[663px] rounded-[20px] overflow-hidden'>
        <img src={showcaseImage} alt="showcaseImage" />
      </div>
      <h2 className='text-base lg:text-[30px] text-secondary font-semibold font-roboto '>{showcaseHead}</h2>
      <p className='text-[12px] lg:text-lg text-secondary font-dm font-normal'>{showcaseP}</p>


    </div>
    </>
  )
}

export default ShowCaseCard
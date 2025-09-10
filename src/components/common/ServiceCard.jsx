import React from 'react'

const ServiceCard = ({cardIcon , cardHead , cardP }) => {
  return (
    <>


    <div className='w-full lg:h-[400px]  lg:w-[404px]  p-[45px] rounded-[20px] bg-[#f4f4f4] hover:bg-[#0c0c0c] duration-[.4s] group m-auto '>
      <div className='w-20 h-20 rounded-full flex justify-center items-center bg-[#0c0c0c] group-hover:bg-[#f4f4f4] group-hover:text-[#0c0c0c] '>{cardIcon}</div>
      <h2 className='text-[25px] font-roboto font-medium text-[#0c0c0c] mt-[62px] group-hover:text-[#f4f4f4]  '>{cardHead}</h2>
      <p className='text-lg font-dm font-normal text-[#0c0c0c] tracking-[3%]  mt-[15px] mb-[45px]   group-hover:text-[#f4f4f4] '>
        {cardP}
        </p>
        
    </div>
    </>
  )
}

export default ServiceCard 
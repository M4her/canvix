import React from 'react'
import CommonHead from './common/CommonHead'
import ServiceCard from './common/ServiceCard'
import { GoPencil } from 'react-icons/go'
import { BsVectorPen } from 'react-icons/bs'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { BiUserVoice } from 'react-icons/bi'
import { TbDiamond } from 'react-icons/tb'
import { RiPaletteLine } from 'react-icons/ri'

const Services = () => {
  return (
    <div className='container my-[100px]'>
      <CommonHead commonContent1={'Our Services '} commonContent2={'High-impact services for your business '}/>
      <div className='flex flex-wrap items-center gap-5  lg:gap-[66px] mt-[91px] '>

        
        <ServiceCard cardIcon={<GoPencil className='text-[#FBFBFB] group-hover:text-[#0c0c0c]  text-4xl'/>} cardHead={'Content Marketing' } cardP={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'} />
        <ServiceCard cardIcon={<BsVectorPen className='text-[#FBFBFB] group-hover:text-[#0c0c0c]  text-4xl'/>} cardHead={'Graphic Design' } cardP={'Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.'} />
        <ServiceCard cardIcon={<HiOutlineSpeakerphone className='text-[#FBFBFB] group-hover:text-[#0c0c0c]  text-4xl'/>} cardHead={'Digital Marketing'  } cardP={"Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing"} />
        <ServiceCard cardIcon={<RiPaletteLine className='text-[#FBFBFB] group-hover:text-[#0c0c0c]  text-4xl'/>} cardHead={'Web Design' } cardP={'We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.'} />
        <ServiceCard cardIcon={<BiUserVoice className='text-[#FBFBFB] group-hover:text-[#0c0c0c]  text-4xl'/>} cardHead={'IT Consulting ' } cardP={'IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services'} />
        <ServiceCard cardIcon={<TbDiamond className='text-[#FBFBFB] group-hover:text-[#0c0c0c]  text-4xl'/>} cardHead={'Brand Identity ' } cardP={'It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.'} />


      </div>
      

      
    </div>
  )
}

export default Services
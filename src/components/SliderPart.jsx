import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import profilepic from '../assets/images/profilePic.png';

const SliderPart = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <section id='sliderPart' className='mt-[103px] mb-[112px]'>
        <div className="container">
          <Slider ref={sliderRef} {...settings}>
            {/* Slide 1 */}
            <div className='w-full bg-primary flex flex-col justify-center items-center text-center rounded-lg p-[45px] my-[35px]'>
              <div className='flex justify-center items-center'>
                <img src={profilepic} alt="profilePicture" />
              </div>
              <h2 className='w-full text-[25px] text-secondary font-roboto font-bold my-[35px]'>
                “Be genuine in your assessment,
                and provide constructive feedback
                to benefit both potential customers
                and the company providing the product or service.”
              </h2>
              <h2 className='w-full text-[20px] text-secondary font-roboto font-semibold'>
                Jacqueline Miller
              </h2>
              <p className='text-base text-secondary font-dm font-normal'>
                CEO of an eduport
              </p>
              <div className='flex justify-center gap-6 mt-6'>
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className='w-[44px] h-[44px] rounded-full flex justify-center items-center bg-[#f4f4f4] hover:bg-[#0c0c0c] hover:text-[#f4f4f4]'
                >
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className='w-[44px] h-[44px] rounded-full flex justify-center items-center bg-[#f4f4f4] hover:bg-[#0c0c0c] hover:text-[#f4f4f4]'
                >
                  <MdOutlineKeyboardArrowRight />
                </button>
              </div>
            </div>

            {/* Slide 2 */}
            <div className='w-full bg-primary flex flex-col justify-center items-center text-center rounded-lg p-[45px] my-[35px]'>
              <div className='flex justify-center items-center'>
                <img src={profilepic} alt="profilePicture" />
              </div>
              <h2 className='w-full text-[25px] text-secondary font-roboto font-bold my-[35px]'>
                “Be genuine in your assessment,
                and provide constructive feedback
                to benefit both potential customers
                and the company providing the product or service.”
              </h2>
              <h2 className='w-full text-[20px] text-secondary font-roboto font-semibold'>
                Jacqueline Miller
              </h2>
              <p className='text-base text-secondary font-dm font-normal'>
                CEO of an eduport
              </p>
              <div className='flex justify-center gap-6 mt-6'>
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className='w-[44px] h-[44px] rounded-full flex justify-center items-center bg-[#f4f4f4] hover:bg-[#0c0c0c] hover:text-[#f4f4f4]'                >
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className='w-[44px] h-[44px] rounded-full flex justify-center items-center bg-[#f4f4f4] hover:bg-[#0c0c0c] hover:text-[#f4f4f4]'                >
                  <MdOutlineKeyboardArrowRight />
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default SliderPart;
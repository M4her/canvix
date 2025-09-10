import React from 'react'
import CommonHead from './common/CommonHead'
import ShowCaseCard from './common/ShowCaseCard'
import Firstpic    from  '../assets/images/Rectangle 20.png'
import Secondpic    from  '../assets/images/Rectangle 22.png'
import Thirdpic    from  '../assets/images/Rectangle 21.png'
import Forthpic    from  '../assets/images/Rectangle 23.png'


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

                <div className='mt-[159px]'>
                     <ShowCaseCard showcaseImage={Thirdpic}
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
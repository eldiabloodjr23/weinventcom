// data

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import {
RxCrop,
RxDesktop,
RxPencil2,
RxReader,
RxRocket,
RxArrowTopRight,

} from 'react-icons/rx'
import { DiIllustrator } from "react-icons/di";
import { FaChessKing } from "react-icons/fa6";
import { LuRepeat2} from "react-icons/lu";


import { FreeMode, Pagination } from 'swiper'

const serviceData = [
  {
   
    title: 'Vývoj aplikací',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <RxDesktop/>
  },
  {
   
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon : <RxPencil2/>
  },
  {

    title: 'Vývoj her',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon : <FaChessKing/>

  },
  {
    title: 'Automatizace procesů',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <LuRepeat2/>
  },
  {
   
    title: 'Umělá inteligence',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon : <DiIllustrator />
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    
  }}
  freeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination]}
  className='h-[150px] sm:h-[140px]'
  >
    {
      serviceData.map((item,index) => {
        return <SwiperSlide key={index}> 
        <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 '> 
          <div className='text-4xl text-accent mb-4'>{item.icon}</div>
          <div className='mb-8'>
            <div className='mb-2 text-lg'>{item.title}</div>
            <p className='max-w-[350px] leading-normal'>{item.description}</p>
          </div>
          <div className='text-3xl'>
            <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
          </div>
        </div>
        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default ServiceSlider;

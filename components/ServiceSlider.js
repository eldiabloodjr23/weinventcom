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
import index from '../pages/services'

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
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item,index) => {
          return <SwiperSlide>
            <div>
              <div>{item.icon}</div>
              
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default ServiceSlider
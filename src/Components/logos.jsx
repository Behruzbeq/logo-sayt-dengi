import React from 'react'
import Logo1 from "../assets/Logo1.svg"
import Logo2 from "../assets/Logo1.svg"
import Logo3 from "../assets/Logo1.svg"
import Logo4 from "../assets/Logo1.svg"
import Logo5 from "../assets/Logo1.svg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination , Autoplay } from 'swiper/modules';

export default function logos() {
  return (
    <div>
       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay:2500,
            disableOnInterection: true,
          }}

        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Logo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Logo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Logo3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Logo4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Logo5} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

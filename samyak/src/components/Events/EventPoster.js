// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css/bundle";
import "./EventPoster.css";

// import required modules
import { EffectCoverflow, Pagination,Autoplay } from "swiper";

export default function EventPoster() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch:20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="image1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="image2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="image3"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="image4"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="image5"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="image6"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="image7"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="image8"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="image9"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

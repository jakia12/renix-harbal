import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import SlideComponent from "../SlideComponent/SlideComponent";

const HomeSlider = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper "
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <SlideComponent></SlideComponent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent></SlideComponent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent></SlideComponent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent></SlideComponent>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;

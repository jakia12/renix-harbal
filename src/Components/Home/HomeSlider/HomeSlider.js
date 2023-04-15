import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HeroMain from "../../../Assets/images/sliderImages/Hero main img.svg";
import BgPattern from "../../../Assets/images/sliderImages/Bg pattern.svg";
// import FevIcon from "../../../Assets/images/sliderImages/Fev icon.svg";
// import leavesBgPattern from "../../../Assets/images/sliderImages/leaves bg pattern.svg";
import tree from "../../../Assets/images/sliderImages/tree.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

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
        modules={[Pagination, Navigation]}
        className="mySwiper h-1/2"
      >
        <SwiperSlide>
          <div className="h-3/4 bg-gradient-to-r from-secondLightPrimary to-white">
            <div className="relative">
              <img src={HeroMain} alt="" className="w-4/5" />
            </div>
            <div className="absolute top-1/3 left-1/4">
              <span className="uppercase text-5xl font-bold text-primary">
                renix{" "}
              </span>
              <span className="uppercase text-5xl font-bold ">unani</span>
              <h1 className="uppercase my-3 text-5xl font-bold">
                laboratories limited
              </h1>
              <p className="text-justify font-medium text-xl ">
                Healthy Living Natural Solutions
              </p>
            </div>
            <div className="w-1/4 absolute top-1/2 left-0">
              <img src={tree} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;

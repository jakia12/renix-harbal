import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import leavesBgPattern from "../../../Assets/images/sliderImages/leaves bg pattern.svg";
import tree from "../../../Assets/images/sliderImages/tree.svg";
import product1 from "../../../Assets/images/sliderImages/product1.png";
import product2 from "../../../Assets/images/sliderImages/product2.png";

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
        className="mySwiper "
      >
        <SwiperSlide>
          <div className=" bg-gradient-to-r from-white via-secondLightPrimary to-white">
            {/* <div className="relative">
              <img src={HeroMain} alt="" />
            </div> */}

            <div className="h-screen container mx-auto flex justify-between items-center">
              <div className="p-16 w-1/2">
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
                <button className="bg-primary px-6 py-2 my-8 font-medium text-white">
                  Shop Now
                </button>
              </div>
              <div className="flex w-1/2 justify-center items-center">
                <div>
                  <img className="w-2/3 -mb-10" src={product1} alt="" />
                </div>
                <div>
                  <img className="w-3/4 " src={product2} alt="" />
                </div>
              </div>
              <div className="w-1/5 absolute top-1/2 left-0">
                <img src={tree} alt="" />
              </div>
              <div>
                <img className="absolute " src={leavesBgPattern} alt="" />
              </div>
              <div>
                <img
                  className="absolute top-7 right-0 w-1/6"
                  src={leavesBgPattern}
                  alt=""
                />
              </div>
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

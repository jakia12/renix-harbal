import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import leavesBgPattern from "../../../Assets/images/sliderImages/leaves bg pattern.svg";
import tree from "../../../Assets/images/sliderImages/tree.svg";
import product1 from "../../../Assets/images/sliderImages/product1.png";
import product2 from "../../../Assets/images/sliderImages/product2.png";
import "./HomeSlider.css";
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

            <div className="lg:h-screen container mx-auto flex flex-col-reverse md:flex md:flex-row md:justify-between md:items-center">
              <div className="w-full text-center md:text-start pb-20 lg:p-16 lg:w-1/2 md:p-20">
                <span className="uppercase text-xl  md:text-2xl font-bold text-primary">
                  renix{" "}
                </span>
                <span className="uppercase text-xl md:text-2xl  font-bold ">
                  unani
                </span>
                <h1 className="uppercase text-xl my-3 md:text-2xl  font-bold">
                  laboratories limited
                </h1>
                <p className=" tracking-normal text-sm lg:tracking-widest font-medium md:text-xl ">
                  Healthy Living Natural Solutions
                </p>
                <button className="bg-primary p-2 text-sm mt-6 lg:px-6 lg:py-2 lg:my-8 md:my-6 md:px-4 md:py-2  lg:font-medium text-white">
                  Shop Now
                </button>
              </div>
              <div className="flex md:w-1/2 lg:1/2 justify-between self-center  items-center py-14">
                <div>
                  <img
                    className="w-2/3 -mb-6 md:-mb-10 ml-12"
                    src={product1}
                    alt=""
                  />
                </div>
                <div>
                  <img className="w-3/4 " src={product2} alt="" />
                </div>
              </div>
              <div className="lg:w-1/5 absolute bottom-0 right-0 w-1/3   md:bottom-0 md:right-0 md:w-1/3">
                <img src={tree} alt="" />
              </div>
              <div>
                <img
                  className="absolute sm:w-1/3  sm:top-1/3 sm:right-0  sm:-left-8 sm:rotate-90  lg:right-3/4 lg:w-1/2 lg:rotate-0 lg:top-1/2"
                  src={leavesBgPattern}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="absolute sm:w-1/3 top-7 right-0 w-1/6"
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

import React from "react";
import leavesBgPattern from "../../../../Assets/images/sliderImages/leaves bg pattern.svg";
import tree from "../../../../Assets/images/sliderImages/tree.svg";
import product1 from "../../../../Assets/images/sliderImages/product1.png";
import product2 from "../../../../Assets/images/sliderImages/product2.png";
import "./SlideComponent.css";
const SlideComponent = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r  from-white  from-10% via-secondLightPrimary via-40% to-white to-80% ">
        <div className="lg:h-screen container mx-auto flex flex-col-reverse md:px-20 md:py-10 md:flex-row md:justify-between md:items-center">
          <div className="w-full text-center text-xl md:text-2xl lg:text-5xl font-bold md:text-start pb-20 md:pb-0 md:pl-6 md:w-2/4 ">
            <span className="uppercase  text-primary">renix </span>
            <span className="uppercase  ">unani</span>
            <h1 className="uppercase md:leading-3  lg:my-6 ">
              laboratories limited
            </h1>
            <p className=" tracking-normal text-sm lg:tracking-widest font-medium md:text-xl ">
              Healthy Living Natural Solutions
            </p>
            <button className="bg-primary p-2 text-sm lg:text-xl mt-6 lg:px-4 lg:py-2  md:mt-6 md:px-4 md:py-2  lg:font-medium text-white">
              Shop Now
            </button>
          </div>
          <div className="flex md:w-1/2 justify-between  self-center  items-center py-14 md:py-0 ">
            <div>
              <img className="w-2/3 -mb-6  ml-12" src={product1} alt="" />
            </div>
            <div>
              <img className="w-3/4 " src={product2} alt="" />
            </div>
          </div>
        </div>
        <div className=" absolute bottom-3 left-2 md:left-0 md:bottom-0 lg:bottom-11 lg:left-10 w-1/3 md:w-1/6 ">
          <img src={tree} alt="" />
        </div>
        <div>
          <img
            className="absolute w-1/3 md:w-1/6 lg:w-1/12 top-0  right-0"
            src={leavesBgPattern}
            alt=""
          />
        </div>
        <div>
          <img
            className="absolute w-1/3  md:w-1/6 lg:w-1/12 top-1/2 lg:top-3/4  right-0 "
            src={leavesBgPattern}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
<div className="relative bg-gradient-to-r  from-white  from-10% via-secondLightPrimary via-40% to-white to-80% ">
  <div className="lg:h-screen container mx-auto flex flex-col-reverse md:px-20 md:py-10 md:flex-row md:justify-between md:items-center">
    <div className="w-full text-center text-xl md:text-2xl lg:text-5xl font-bold md:text-start pb-20 md:pb-0 md:pl-6 md:w-2/4 ">
      <span className="uppercase  text-primary">renix </span>
      <span className="uppercase  ">unani</span>
      <h1 className="uppercase md:leading-3  lg:my-6 ">laboratories limited</h1>
      <p className=" tracking-normal text-sm lg:tracking-widest font-medium md:text-xl ">
        Healthy Living Natural Solutions
      </p>
      <button className="bg-primary p-2 text-sm lg:text-xl mt-6 lg:px-4 lg:py-2  md:mt-6 md:px-4 md:py-2  lg:font-medium text-white">
        Shop Now
      </button>
    </div>
    <div className="flex md:w-1/2 justify-between  self-center  items-center py-14 md:py-0 ">
      <div>
        <img className="w-2/3 -mb-6  ml-12" src={product1} alt="" />
      </div>
      <div>
        <img className="w-3/4 " src={product2} alt="" />
      </div>
    </div>
  </div>
  <div className=" absolute bottom-3 left-2 md:left-0 md:bottom-0 lg:bottom-11 lg:left-10 w-1/3 md:w-1/6 ">
    <img src={tree} alt="" />
  </div>
  <div>
    <img
      className="absolute w-1/3 md:w-1/6 lg:w-1/12 top-0  right-0"
      src={leavesBgPattern}
      alt=""
    />
  </div>
  <div>
    <img
      className="absolute w-1/3  md:w-1/6 lg:w-1/12 top-1/2 lg:top-3/4  right-0 "
      src={leavesBgPattern}
      alt=""
    />
  </div>
</div>;

import React from "react";
import healthProduct1 from "../../../../Assets/images/health-Product-Images/healthProduct-1.png";
import healthProduct2 from "../../../../Assets/images/health-Product-Images/healthProduct-2.png";
import medicine from "../../../../Assets/images/health-Product-Images/medicine.png";
const HealthCareProducts = () => {
  return (
    <div className="w-[93%] lg:w-[90%] mx-auto py-20">
      {/* section 1 of health product */}
      <div className="flex gap-10 mb-10 flex-col md:flex-row ">
        <div className="flex gap-y-7 md:gap-y-0  shadow-lg p-10 bg-opacity-30 bg-whiteSmoke flex-col  lg:flex-row lg:justify-between lg:items-center  rounded-2xl w-full md:w-1/2 lg:w-full">
          <div className="w-full md:w-1/2 lg:w-3/4">
            <p className="uppercase text-lg lg:text-base text-primary mb-2">
              save upto 30% off
            </p>
            <h1 className="text-2xl lg:text-4xl font-bold leading-normal">
              Healthcare Products
            </h1>
            <button className="uppercase mt-4 outline p-2 lg:px-4 lg:py-2 text-xs lg:text-sm text-primary border-1 border-primary hover:bg-primary hover:text-white">
              shop now
            </button>
          </div>
          <div className="self-center  lg:w-1/4">
            <img className=" " src={medicine} alt="" srcset="" />
          </div>
        </div>
        <div className="bg-primary rounded-3xl flex justify-center items-center md:p-4 md:w-1/2 lg:w-1/3">
          <img className="w-1/2" src={healthProduct1} alt="" />
        </div>
      </div>

      {/* section 2 of health product */}
      <div className="flex flex-col  md:flex-row-reverse gap-10 ">
        <div className="flex gap-y-7 md:gap-y-0  shadow-lg p-10 bg-opacity-30 bg-whiteSmoke flex-col lg:flex-row lg:justify-between lg:items-center  rounded-2xl w-full md:w-1/2 lg:w-full">
          <div className="self-center">
            <p className="uppercase text-lg lg:text-base text-primary mb-2">
              save upto 30% off
            </p>
            <h1 className="text-2xl lg:text-4xl font-bold leading-normal">
              Healthcare Products
            </h1>
            <button className="uppercase mt-4 outline p-2 lg:px-4 lg:py-2 text-xs lg:text-sm text-primary border-1 border-primary hover:bg-primary hover:text-white">
              shop now
            </button>
          </div>
          <div className=" lg:w-1/4">
            <img
              className="w-1/2 mx-auto md:w-2/4"
              src={healthProduct2}
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="bg-secondary text-primary rounded-3xl p-8  w-full md:w-1/2 lg:w-1/3">
          <h1 className=" text-3xl ">Trusted Brands</h1>
          <p className="md:my-2 text-sm ">
          Renix Unani Laboratories Limited is a trusted brand dedicated to producing high-quality, natural medicine that is effective in treating illnesses without harmful side effects. 
          </p>
          <div className=" ml-9 mt-4 ">
            <ul className="list-disc ">
              <li>Selected products</li>
              <li>Always low price</li>
              <li>Free shipping</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCareProducts;

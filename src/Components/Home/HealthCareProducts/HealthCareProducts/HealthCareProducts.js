import React from "react";
import healthProduct1 from "../../../../Assets/images/health-Product-Images/healthProduct-1.png";
import healthProduct2 from "../../../../Assets/images/health-Product-Images/healthProduct-2.png";
import medicine from "../../../../Assets/images/health-Product-Images/medicine.png";
const HealthCareProducts = () => {
  return (
    <div className="flex justify-center self-center items-center my-52">
      <div className="grid grid-cols-1 gap-y-10">
        {/* section 1 of health product */}
        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex gap-y-7 md:gap-y-0 flex-col md:flex-row shadow-lg p-10 bg-opacity-30 bg-whiteSmoke  md:justify-between  md:items-center  rounded-2xl w-full md:w-3/4">
            <div className="self-center">
              <p className="uppercase  text-primary">save upto 30% off</p>
              <h1 className=" text-3xl font-bold leading-normal">
                Healthcare Products
              </h1>
              <button className="uppercase mt-4 outline px-4 py-2 text-sm text-primary outline-1 outline-primary">
                shop now
              </button>
            </div>
            <div className="self-center">
              <img className="w-full " src={medicine} alt="" srcset="" />
            </div>
          </div>
          <div className="bg-primary rounded-3xl flex justify-center items-center">
            <img className="w-1/2" src={healthProduct1} alt="" />
          </div>
        </div>

        {/* section 2 of health product */}
        <div className="flex flex-col  lg:flex-row-reverse gap-10 ">
          <div className="flex gap-y-7 md:gap-y-0  shadow-lg p-10 bg-opacity-30 bg-whiteSmoke flex-col md:flex-row md:justify-between md:items-center  rounded-2xl w-full md:w-3/4">
            <div className="self-center">
              <p className="uppercase  text-primary">save upto 30% off</p>
              <h1 className=" text-3xl font-bold leading-normal">
                Healthcare Products
              </h1>
              <button className="uppercase mt-4 outline px-4 py-2 text-sm text-primary outline-1 outline-primary">
                shop now
              </button>
            </div>
            <div className="self-center">
              <img
                className="w-3/4 md:w-2/4"
                src={healthProduct2}
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="bg-secondary text-primary rounded-3xl p-8 md:p-4 ">
            <h1 className=" text-3xl mt-8">Trusted Brands</h1>
            <p className="">Lorem ipsum dolor sit amet csit amet csit amet c</p>
            <div className="flex ml-9 mt-4 mb-8">
              <ul className="list-disc ">
                <li>Selected products</li>
                <li>Always low price</li>
                <li>Free shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCareProducts;

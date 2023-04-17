import React from "react";
import healthProduct1 from "../../../../Assets/images/health-Product-Images/healthProduct-1.png";
import healthProduct2 from "../../../../Assets/images/health-Product-Images/healthProduct-2.png";
import medicine from "../../../../Assets/images/health-Product-Images/medicine.png";
const HealthCareProducts = () => {
  return (
    <div className="flex justify-center self-center items-center my-52">
      <div className="flex gap-10 ">
        <div className="flex shadow-lg p-10 bg-opacity-30 bg-whiteSmoke  justify-between  items-center  rounded-2xl w-3/4">
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
    </div>
  );
};

export default HealthCareProducts;

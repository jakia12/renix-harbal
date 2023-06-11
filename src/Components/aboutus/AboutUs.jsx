import React from "react";
import abtPic from "../../Assets/images/abt.png";

const AboutUs = () => {
  return (
    <section className="py-14 lg:py-20 bg-[#fff]">
      <div className="mx-auto w-[93%] lg:w-[90%]">
        <h2 className="text-3xl font-semibold text-secondary section_title text-center relative mb-4 capitalize">
          What we Do
        </h2>
        <div className="flex mt-[60px] items-center ">
          <div className="w-6/12">
            <div className="m-4">
              <img src={abtPic} alt="" />
            </div>
          </div>
          <div className="w-6/12">
            <div className="m-4">
              <h2 className="text-xl lg:text-2xl font-semibold text-textColor my-2 capitalize">
                Healthy lifeStyle
              </h2>
              <p className="text-sm text-[#555] leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>

              <button className="uppercase mt-4 outline p-2 lg:px-4 lg:py-2 text-xs lg:text-sm text-primary border-1 border-primary hover:bg-primary hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

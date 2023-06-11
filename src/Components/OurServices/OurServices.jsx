import React from "react";
import {
  FaHeartbeat,
  FaPills,
  FaHospitalUser,
  FaDna,
  FaWheelchair,
  FaNotesMedical,
} from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      _id: 1,
      title: "Lorem ipsum",
      subtitle:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      serviceIcon: FaHeartbeat,
    },
    {
      _id: 2,
      title: "Lorem ipsum",
      subtitle:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      serviceIcon: FaPills,
    },
    {
      _id: 3,
      title: "Lorem ipsum",
      subtitle:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      serviceIcon: FaHospitalUser,
    },
    {
      _id: 4,
      title: "Lorem ipsum",
      subtitle:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      serviceIcon: FaDna,
    },
    {
      _id: 5,
      title: "Lorem ipsum",
      subtitle:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      serviceIcon: FaWheelchair,
    },
    {
      _id: 6,
      title: "Lorem ipsum",
      subtitle:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
      serviceIcon: FaNotesMedical,
    },
  ];
  return (
    <section className="py-14 lg:py-20">
      <div className="w-[93%] lg:w-[90%] mx-auto ">
        <h2 className="text-3xl font-semibold text-secondary section_title text-center relative mb-4">
          Services
        </h2>

        {/* services card */}
        <div className="flex flex-wrap mt-[60px]">
          {services.map((service) => (
            <div className="w-full md:w-6/12 lg:w-4/12">
              <div className=" service_card relative py-[50px] px-[40px] m-4 border border-[#ddd] text-center">
                <div className="mb-5 flex items-center justify-center  z-[10] ">
                  <span className=" icon_image relative text-3xl bg-primary w-[70px] h-[70px] rounded-md text-white flex justify-center items-center">
                    <service.serviceIcon />
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-secondary my-4">
                  {service.title}
                </h3>
                <p className="text-sm text-[#555] ">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

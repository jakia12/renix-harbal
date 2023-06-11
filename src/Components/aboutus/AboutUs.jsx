import React from "react";
import abtPic from "../../Assets/images/abt.png";

const AboutUs = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto w-[93%] lg:w-[90%]">
        <div className="flex">
          <div className="w-6/12">
            <div className="m-4">
              <img src={abtPic} alt="" />
            </div>
          </div>
          <div className="w-6/12">
            <p className="m-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

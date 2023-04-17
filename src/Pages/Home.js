import React from "react";
import HomeSlider from "../Components/Home/HomeSlider/HomeSlider/HomeSlider";
import HealthCareProducts from "../Components/Home/HealthCareProducts/HealthCareProducts/HealthCareProducts";
import LocationMap from "../Components/Home/LocationMap/LocationMap";

const Home = () => {
  return (
    <div>
      Home
      <HomeSlider></HomeSlider>
      <HealthCareProducts></HealthCareProducts>
      <LocationMap></LocationMap>
    </div>
  );
};

export default Home;
